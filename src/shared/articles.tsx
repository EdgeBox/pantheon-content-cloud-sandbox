'use client';

import { useEffect, useState } from 'react';
import { contentCloud } from './content';
import { ArticleContent, SharedContentUserData } from '../content-cloud/schema';
import { RestListResponse } from '../content-cloud/rest-client';
import { drupalHtml } from '../content-cloud/content-helpers';

export default function Articles() {
	const [articles, displayArticles] = useState<RestListResponse<
		ArticleContent<'rest'>
	> | null>(null);
	const [bookmarking, setBookmarking] = useState<string | null>(null);

	useEffect(() => {
		contentCloud
			.contentCollection({
				content_type: 'ArticleContent',
				/*filter: {
        sys: {
          assignedTagNames_in: ["Developer Tools"],
        },
      },*/
				user_data_types: ['SharedContentUserData'],
				include: 5,
				filter: {},
			})
			.then((response) => {
				console.log('Articles', response);
				displayArticles(response);
			});
	}, []);

	if (!articles) {
		return <div>loading...</div>;
	}

	return (
		<>
			<h1>Articles</h1>

			{articles.items.map((article) => {
				let bookmarked = article.sharedUserData?.bookmarked;

				return (
					<div key={article.sys.id}>
						<h2>{article.sys.name ?? '<unnamed>'}</h2>
						<div className='w-1/5 grow-0 shrink-0 pt-2 text-right'>
							<a
								href='#'
								className='rounded p-2 bg-slate-500 hover:bg-slate-600 break-keep'
								onClick={async (e) => {
									e.preventDefault();

									bookmarked = !bookmarked;

									setBookmarking((bookmarked ? '+' : '-') + article.sys.id);
									const result = await contentCloud.setContentUserData(
										article.sys.id!,
										'SharedContentUserData',
										{ bookmarked },
									);

									article.sharedUserData = {
										...(article.sharedUserData ||
											({} as SharedContentUserData<'rest'>)),
										bookmarked: !!result.bookmarked,
									};

									displayArticles({ ...articles, items: [...articles.items] });
									setBookmarking(null);
								}}
							>
								{bookmarking === '+' + article.sys.id
									? 'Bookmarked ...'
									: bookmarking === '-' + article.sys.id
										? 'Bookmark ...'
										: bookmarked
											? 'Bookmarked'
											: 'Bookmark'}
							</a>
						</div>
						<div
							dangerouslySetInnerHTML={{
								__html: drupalHtml(article.fields.body),
							}}
						/>
					</div>
				);
			})}

			<p>
				<em>Total: {articles.total} articles</em>
			</p>
		</>
	);
}
