import Link from 'next/link';

import styles from './post-list.module.scss';

import type { PostImport, PostParams } from '@/app/posts/types';

interface LineItemProps {
	params: PostParams;
	post: PostImport;
}

export function LineItem({ params, post }: LineItemProps) {
	const Post = post.default;

	return (
		<li className={styles.line}>
			<div className={styles.line__title}>
				<Link href={`/posts/${params.year}/${params.month}/${params.slug}`}>{post.frontmatter?.title ?? <Post />}</Link>
			</div>
			<div className={styles.line__date}>{post.frontmatter?.published ?? ''}</div>
		</li>
	);
}
