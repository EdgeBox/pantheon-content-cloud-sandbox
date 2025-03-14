'use client';

import { useEffect, useState } from 'react';
import { contentCloud } from './content';
import { BlogContent, BlogContentOrder } from '../content-cloud/schema';
import { RestListResponse } from '../content-cloud/rest-client';
import { InputText } from '@pantheon-systems/pds-toolkit-react';

let request = 0;
export default function BlogList({ mode }: { mode?: 'bookmarks' | 'history' }) {
	const [blogArticles, displayBlog] =
		useState<RestListResponse<BlogContent> | null>(null);
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

		displayBlog(null);

		contentCloud
			.contentCollection({
				content_type: 'BlogContent',
				query: search,
				...(searchTags.length
					? {
							metadata: {
								tags: {
									sys: {
										name: {
											in: searchTags,
										},
									},
								},
							},
						}
					: {}),
				/*filter: {
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
				},*/
				user_data_types: ['FlagsContentUserData'],
				include: 1,
				order:
					mode === 'history'
						? ['-user_data.FlagsContentUserData.readAt']
						: undefined,
				user_data_filter:
					mode === 'history'
						? {
								FlagsContentUserData: {
									readAt: {
										gt: new Date(0).toISOString(),
									},
								},
							}
						: mode === 'bookmarks'
							? {
									FlagsContentUserData: {
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
				displayBlog(response as RestListResponse<BlogContent>);
			});
	}, [search]);

	const content = blogArticles ? (
		<>
			{blogArticles.items.map((article) => {
				return (
					<div key={article.sys.id} style={{ marginTop: '4em' }}>
						<a href={`/updates/${article.sys.id}`}>
							<h2>{article.sys.name ?? '<unnamed>'} </h2>
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
	) : (
		<div style={{ marginTop: '2em' }}>loading...</div>
	);

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

			{content}
		</>
	);
}
