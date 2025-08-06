import { getAllPosts } from '@/app/posts/utils';

import type { PostImport, PostParams } from '@/app/posts/types';

interface PageProps {
	params: Promise<PostParams>;
}

export default async function Page({ params }: PageProps) {
	const { month, slug, year } = await params;
	const post = (await import(`@/content/posts/${year}/${month}/${slug}.mdx`)) as PostImport;

	const { default: Post, frontmatter } = post;

	return (
		<main className="content">
			<h1>{frontmatter.type === 'post' ? frontmatter.title : new Date(frontmatter.published).toLocaleDateString('en-GB', { dateStyle: 'long' })}</h1>
			<Post />
		</main>
	);
}

export function generateStaticParams() {
	const posts = getAllPosts();
	return posts;
}

export const dynamicParams = false;
