'use client';

import React, { useState } from 'react';
import { contentCloud } from '../content';
import { BlogContent, SharedContentUserData } from '../content-cloud/schema';
import { Button } from '@pantheon-systems/pds-toolkit-react';

export default function Bookmark({
	content: contentIn,
}: {
	content: BlogContent<'rest'>;
}) {
	const [article, displayBlogArticle] =
		useState<BlogContent<'rest'>>(contentIn);
	const [bookmarking, setBookmarking] = useState<string | null>(null);

	let bookmarked = article.sharedUserData?.bookmarked;
	const bookmarkLabel =
		bookmarking === '+' + article.sys.id
			? 'Bookmarked ...'
			: bookmarking === '-' + article.sys.id
				? 'Bookmark ...'
				: bookmarked
					? 'Bookmarked'
					: 'Bookmark';

	async function toggleBookmark(article: BlogContent<'rest'>) {
		bookmarked = !bookmarked;

		setBookmarking((bookmarked ? '+' : '-') + article.sys.id);
		const result = await contentCloud.setContentUserData(
			article.sys.id!,
			'SharedContentUserData',
			{ bookmarked },
		);

		article.sharedUserData = {
			...(article.sharedUserData || ({} as SharedContentUserData<'rest'>)),
			bookmarked: !!result.bookmarked,
		};

		displayBlogArticle({
			...article,
		});
		setBookmarking(null);
	}

	return (
		<Button
			iconName='star'
			iconSize='md'
			label={bookmarkLabel}
			ariaLabel={bookmarkLabel}
			variant={bookmarked ? 'primary' : 'secondary'}
			displayType='icon-start'
			onClick={(e: React.MouseEvent) => {
				e.preventDefault();
				toggleBookmark(article);
			}}
		/>
	);
}
