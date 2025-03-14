'use client';

import React, { useState } from 'react';
import { contentCloud } from './content';
import { BlogContent, FlagsContentUserData } from '../content-cloud/schema';
import { Button } from '@pantheon-systems/pds-toolkit-react';

type BookmarkState = 'bookmarked' | 'not-bookmarked' | 'adding' | 'removing';
const BOOKMARK_STATE_LABELS: { [key in BookmarkState]: string } = {
	'not-bookmarked': 'Bookmark',
	adding: 'Bookmarked ...',
	bookmarked: 'Bookmarked',
	removing: 'Bookmark ...',
};

export default function Bookmark({
	content: contentIn,
}: {
	content: BlogContent;
}) {
	const [article, displayBlogArticle] = useState<BlogContent>(contentIn);
	const [bookmarkState, setBookmarkState] = useState<BookmarkState>(
		article.flagsUserData?.fields.bookmarked ? 'bookmarked' : 'not-bookmarked',
	);

	const bookmarkLabel = BOOKMARK_STATE_LABELS[bookmarkState];

	async function toggleBookmark(article: BlogContent) {
		const bookmarked = bookmarkState !== 'bookmarked';

		setBookmarkState(bookmarked ? 'adding' : 'removing');

		const result = await contentCloud.setContentUserData(
			article.sys.id!,
			'FlagsContentUserData',
			{ bookmarked },
		);

		displayBlogArticle({
			...article,
			flagsUserData: {
				...(article.flagsUserData || ({} as FlagsContentUserData)),
				fields: {
					...(article.flagsUserData?.fields || {}),
					bookmarked: !!result.fields.bookmarked,
				},
			},
		});

		setBookmarkState(bookmarked ? 'bookmarked' : 'not-bookmarked');
	}

	return (
		<Button
			disabled={bookmarkState === 'adding' || bookmarkState === 'removing'}
			iconName='star'
			iconSize='md'
			label={bookmarkLabel}
			ariaLabel={bookmarkLabel}
			variant={
				bookmarkState === 'bookmarked' || bookmarkState === 'adding'
					? 'primary'
					: 'secondary'
			}
			displayType='icon-start'
			onClick={(e: React.MouseEvent) => {
				e.preventDefault();
				toggleBookmark(article);
			}}
		/>
	);
}
