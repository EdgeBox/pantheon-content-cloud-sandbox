'use client';

import { useEffect, useState } from 'react';
import { contentCloud } from '../app/content';
import { BlogContent, BlogContentOrder } from '../content-cloud/schema';
import { RestListResponse } from '../content-cloud/rest-client';
import { InputText } from '@pantheon-systems/pds-toolkit-react';
import BlogArticle from './blog-article';

let request = 0;
export default function BlogList({ mode }: { mode?: 'bookmarks' | 'history' }) {
	const [blogArticles, displayBlog] = useState<RestListResponse<
		BlogContent<'rest'>
	> | null>(null);
	const [viewArticleId, setViewArticleId] = useState<string | null>(null);
	const [search, setSearch] = useState<string>('');

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
		const expectedRequest = ++request;

		contentCloud
			.contentCollection({
				content_type: 'BlogContent',
				query: search,
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
				include: 0,
				order:
					mode === 'history'
						? [BlogContentOrder.sys_sharedUserData_readAt_DESC]
						: undefined,
				user_data_filter:
					mode === 'history'
						? {
								SharedContentUserData: {
									readAt_gt: new Date(0).toISOString(),
								},
							}
						: mode === 'bookmarks'
							? {
									SharedContentUserData: {
										bookmarked: true,
									},
								}
							: undefined,
			})
			.then((response) => {
				if (expectedRequest !== request) {
					console.log('Request cancelled');
					return;
				}
				console.log('Blog', response);
				displayBlog(response);
			});
	}, [search]);

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
			<h1>
				Blog {searchTags.length ? ` - ${searchTags.join(', ')}` : ''}
				{mode === 'bookmarks'
					? ' - Bookmarks'
					: mode === 'history'
						? ' - History'
						: ''}
			</h1>

			<InputText
				id='article-search'
				label='Search'
				showLabel={false}
				type='search'
				hasClearButton
				onChange={(text: string) => setSearch(text)}
				value={search}
			/>

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
