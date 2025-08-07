import { cx } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';

import styles from './meta.module.scss';

import type { WithClassName } from '@/utils/types';

interface MetaProps extends WithClassName {}

export function Meta({ className }: MetaProps) {
	return (
		<div className={cx(className)}>
			<h3>Elsewhere</h3>
			<ul className={cx(styles.list)} role="list">
				<li className={styles.entry}>
					<Image src="/icons/mastodon.svg" alt="Mastodon" height={16} width={16} />
					<Link href="https://hachyderm.io/@scottabbey" rel="me">
						Mastodon
					</Link>
				</li>
				<li className={styles.entry}>
					<Image src="/icons/github.svg" alt="Github" height={16} width={16} />
					<Link href="https://github.com/malakhite" rel="me">
						Github
					</Link>
				</li>
				<li className={styles.entry}>
					<Image src="/icons/wikipedia.svg" alt="Wikipedia" height={16} width={16} />
					<Link href="https://en.wikipedia.org/wiki/User:Malakhi" rel="me">
						Wikipedia
					</Link>
				</li>
				<li className={styles.entry}>
					<Image src="/icons/x.svg" alt="Twitter" height={16} width={16} />
					<Link href="https://twitter.com/scottabbey" rel="me">
						Twitter
					</Link>
				</li>
			</ul>
		</div>
	);
}
