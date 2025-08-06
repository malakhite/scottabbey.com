'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

import { Button } from '@/components/button';
import { LineItem } from './line-item';

import styles from './post-list.module.scss';

import type { PostImport, PostParams } from '@/app/posts/types';

const PAGE_SIZE = 10;

type Posts = Array<{
	params: PostParams;
	post: Omit<PostImport, 'default'>;
}>;

interface PostListProps {
	posts: Posts;
}

export function PostList({ posts }: PostListProps) {
	const [page, setPage] = useState(1);

	const handlePageChange: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		const action = event.currentTarget.name;
		if (action === 'increment') {
			setPage((prev) => prev + 1);
		} else if (action === 'decrement') {
			setPage((prev) => prev - 1);
		}
	};

	return (
		<>
			<ul className={styles.base} role="list">
				{posts.slice(page - 1 * PAGE_SIZE, page * PAGE_SIZE).map(({ params, post }, index) => {
					return <LineItem key={`${index}-${params.slug}`} params={params} post={post} />;
				})}
			</ul>

			<div className={styles.pagination}>
				<Button name="decrement" onClick={handlePageChange} disabled={page === 1}>
					<ChevronLeft />
				</Button>

				<Button name="increment" onClick={handlePageChange} disabled={page * PAGE_SIZE >= posts.length}>
					<ChevronRight />
				</Button>
			</div>
		</>
	);
}
