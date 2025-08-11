import { cx } from 'class-variance-authority';
import { Mailbox } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './h-card.module.scss';

import type { WithClassName } from '@/types/utility';

interface MetaProps extends WithClassName {}

export function HCard({ className }: MetaProps) {
	return (
		<section className={cx('h-card', className)}>
			<h3>About me</h3>
			<ul className={cx(styles.list)} role="list">
				<li className={cx(styles.entry)}>
					<div className={cx(styles.icon)}>
						<Mailbox size={16} />
					</div>
					<a href="mailto:scott@scottabbey.com">scott@scottabbey.com</a>
				</li>
			</ul>
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
		</section>
	);
}
