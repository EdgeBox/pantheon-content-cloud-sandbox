'use client';

import React, { useEffect, useState } from 'react';
import { contentCloud } from '../content';
import { BlogContent } from '../content-cloud/schema';
import { drupalHtml } from '../content-cloud/content-helpers';
import { Button } from '@pantheon-systems/pds-toolkit-react';
import Bookmark from './bookmark';

export default function BlogArticle({
	id,
	back,
}: {
	id: string;
	back: () => void;
}) {
	const [article, displayBlogArticle] = useState<
		BlogContent<'rest'> | null | 'not-found'
	>(null);

	useEffect(() => {
		contentCloud
			.contentCollection({
				content_type: 'BlogContent',
				filter: {
					sys: {
						id,
					},
				},
				user_data_types: ['SharedContentUserData'],
				include: 5,
			})
			.then((response) => {
				console.log('Blog article', response);

				displayBlogArticle(response.items[0] ?? 'not-found');

				response.items[0]?.sys.id &&
					contentCloud.setContentUserData(
						response.items[0].sys.id,
						'SharedContentUserData',
						{ readAt: new Date().toISOString() },
					);
			});
	}, []);

	if (!article) {
		return <div>loading...</div>;
	}

	if (article === 'not-found') {
		return <div>Not found :(</div>;
	}

	return (
		<>
			<Button
				onClick={(e: React.MouseEvent) => {
					e.preventDefault();
					back();
				}}
				displayType='icon-start'
				disabled={false}
				variant='secondary'
				size='md'
				iconName='arrowLeft'
				linkContent={<a href='/updates'></a>}
				className=''
				label='Back'
				ariaLabel='Back'
			/>
			<h1 style={{ marginTop: '1em' }}>{article.sys.name ?? '<unnamed>'}</h1>
			<div style={{ margin: '1em 0' }}>
				<Bookmark content={article} />
			</div>
			<div
				dangerouslySetInnerHTML={{
					__html: drupalHtml(article.fields.body),
				}}
			/>
		</>
	);
}
