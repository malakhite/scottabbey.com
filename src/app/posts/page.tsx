import { PostList } from '@/components/posts/post-list';
import { getAllPosts } from './utils';

import type { PostImport } from './types';

export default async function Page() {
	const postPaths = getAllPosts();
	const posts = await Promise.all(
		postPaths.map(async (params) => {
			const { default: Post, ...post } = (await import(`@/content/posts/${params.year}/${params.month}/${params.slug}.mdx`)) as PostImport;
			return { params, post };
		}),
	);
	return (
		<main className="content">
			<h1>Posts</h1>
			<PostList posts={posts} />
		</main>
	);
}
