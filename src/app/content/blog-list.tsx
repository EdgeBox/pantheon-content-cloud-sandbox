'use client';

import { useEffect, useState } from 'react';
import { contentCloud } from '../content';
import { BlogContent } from '../content-cloud/schema';
import { RestListResponse } from '../content-cloud/rest-client';
import BlogArticle from './blog-article';

export default function BlogList({ mode }: { mode?: 'bookmarks' | 'history' }) {
	const [blogArticles, displayBlog] = useState<RestListResponse<
		BlogContent<'rest'>
	> | null>(null);
	const [viewArticleId, setViewArticleId] = useState<string | null>(null);

	const urlParams =
		typeof window !== 'undefined'
			? new URLSearchParams(window.location.search)
			: null;
	const searchTags =
		urlParams
			?.get('tags')
			?.split(',')
			.map((c) => decodeURIComponent(c))
			.filter((c) => !!c) ?? [];

	useEffect(() => {
		contentCloud
			.contentCollection({
				content_type: 'BlogContent',
				filter: {
					sys: {
						//...(searchTags.length ? { assignedTagNames_in: searchTags } : {}),
						assignedTagNames_in: searchTags.length
							? searchTags
							: [
									'Developer Tools',
									'Getting Started with Pantheon',
									//...(searchTags.length ? searchTags : []),
								],
					},
				},
				user_data_types: ['SharedContentUserData'],
				include: 5,
			})
			.then((response) => {
				console.log('Blog', response);
				displayBlog(response);
			});
	}, []);

	if (!blogArticles) {
		return <div>loading...</div>;
	}

	if (viewArticleId) {
		return (
			<BlogArticle id={viewArticleId} back={() => setViewArticleId(null)} />
		);
	}

	return (
		<>
			<h1>Blog {searchTags.length ? ` - ${searchTags.join(', ')}` : ''}</h1>

			{blogArticles.items.map((article) => {
				return (
					<div key={article.sys.id} style={{ marginTop: '4em' }}>
						<a
							href={`/updates/${article.sys.id}`}
							onClick={(e) => {
								e.preventDefault();
								setViewArticleId(article.sys.id ?? null);
							}}
						>
							<h2 onClick={() => setViewArticleId(article.sys.id ?? null)}>
								{article.sys.name ?? '<unnamed>'}{' '}
							</h2>
						</a>
						{article.fields.topics?.map((topic) => {
							return (
								<a
									key={topic.sys.id}
									style={{ marginRight: '1em' }}
									href={`?tags=${(searchTags.includes(topic.sys.name!) ? searchTags.filter((c) => c !== topic.sys.name) : [...searchTags, topic.sys.name!]).map((c) => encodeURIComponent(c))}`}
								>
									{topic.sys.name}
								</a>
							);
						})}
					</div>
				);
			})}

			<p style={{ marginTop: '2em' }}>
				<em>Total: {blogArticles.total} articles</em>
			</p>
		</>
	);
}
