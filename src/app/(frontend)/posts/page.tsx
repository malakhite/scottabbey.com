import { PostList } from '@/components/posts/post-list';

export default async function Page() {
	return (
		<main className="content">
			<h1>Posts</h1>
			<PostList />
		</main>
	);
}
