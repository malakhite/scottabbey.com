import { Meta } from '@/components/meta';
import { PostList } from '@/components/posts/post-list';

export default function Home() {
	return (
		<main className="content two-column">
			<div>
				<p>Welcome to my home on the internet.</p>
				<PostList pages={1} className="card" />
			</div>
			<Meta className="card" />
		</main>
	);
}
