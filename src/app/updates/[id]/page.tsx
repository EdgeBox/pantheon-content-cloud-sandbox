'use client';

import BlogArticle from '@/shared/blog-article';
import { useParams } from 'next/navigation';

export default function Article() {
	const router = useParams();
	const articleId = router.id as string;

	return <BlogArticle id={articleId} />;
}
