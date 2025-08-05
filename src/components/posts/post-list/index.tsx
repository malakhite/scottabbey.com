import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { getAllPosts } from '@/app/posts/utils';
import { Button } from '@/components/button';
import { LineItem } from './line-item';

import styles from './post-list.module.scss';

import type { PostImport } from '@/app/posts/types';

interface PostListProps {
	searchParams: Promise<{ page?: string }>;
}

const PAGE_SIZE = 10;

export async function PostList({ searchParams }: PostListProps) {
	const page = Number((await searchParams).page ?? '1');
	const postPaths = getAllPosts();
	const posts = await Promise.all(
		postPaths.map(async (params) => {
			const post = (await import(`@/content/posts/${params.year}/${params.month}/${params.slug}.mdx`)) as PostImport;
			return { params, post };
		}),
	);

	return (
		<>
			<ul className={styles.base} role="list">
				{posts.slice(page - 1 * PAGE_SIZE, page * PAGE_SIZE).map(({ params, post }, index) => {
					return <LineItem key={`${index}-${params.slug}`} params={params} post={post} />;
				})}
			</ul>

			<div className={styles.pagination}>
				{page > 1 ? (
					<Button asChild={true}>
						<Link href={`/posts?page=${page - 1}`} className="button">
							<ChevronLeft />
						</Link>
					</Button>
				) : (
					<Button disabled={true}>
						<ChevronLeft />
					</Button>
				)}

				{posts.length > page * PAGE_SIZE ? (
					<Button asChild={true}>
						<Link href={`/posts?page=${page + 1}`}>
							<ChevronRight />
						</Link>
					</Button>
				) : (
					<Button disabled={true}>
						<ChevronRight />
					</Button>
				)}
			</div>
		</>
	);
}
