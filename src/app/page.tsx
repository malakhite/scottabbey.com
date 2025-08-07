import { PostList } from '@/components/posts/post-list';

export default function Home() {
	return (
		<main className="content">
			<p>Welcome to my home on the internet.</p>
			<PostList pages={1} className="card" />
		</main>
	);
}
