import Link from 'next/link';

import styles from './post-list.module.scss';

import type { Frontmatter, PostPathParams } from '@/types/posts';

interface LineItemProps {
	params: PostPathParams;
	frontmatter: Frontmatter;
}

export function LineItem({ params, frontmatter }: LineItemProps) {
	return (
		<li className={styles.line}>
			<div className={styles.line__title}>
				<Link href={`/posts/${params.year}/${params.month}/${params.slug}`}>{frontmatter.title}</Link>
			</div>
			<div className={styles.line__date}>{frontmatter?.published ?? ''}</div>
		</li>
	);
}
