import { PostList } from '@/components/posts/post-list';

interface PageProps {
	searchParams: Promise<{ page?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
	return (
		<main className="content">
			<h1>Posts</h1>

			<PostList searchParams={searchParams} />
		</main>
	);
}
