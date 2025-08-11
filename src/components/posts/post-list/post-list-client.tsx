'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

import { Button } from '@/components/button';
import { LineItem } from './line-item';

import styles from './post-list.module.scss';

import type { Frontmatter, PostPathParams } from '@/types/posts';

type Posts = Array<{
	params: PostPathParams;
	frontmatter: Frontmatter;
}>;

interface PostListProps {
	className?: string;
	pageSize: number;
	posts: Posts;
}

export function PostList({ className, pageSize, posts }: PostListProps) {
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
		<section className={className}>
			<ul className={styles.base} role="list">
				{posts.slice(page - 1 * pageSize, page * pageSize).map(({ params, frontmatter }, index) => {
					return <LineItem key={`${index}-${params.slug}`} params={params} frontmatter={frontmatter} />;
				})}
			</ul>

			{posts.length > pageSize && (
				<div className={styles.pagination}>
					<Button name="decrement" onClick={handlePageChange} disabled={page === 1}>
						<ChevronLeft />
					</Button>

					<Button name="increment" onClick={handlePageChange} disabled={page * pageSize >= posts.length}>
						<ChevronRight />
					</Button>
				</div>
			)}
		</section>
	);
}
