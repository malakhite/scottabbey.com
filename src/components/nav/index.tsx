import Link from 'next/link';

import styles from './nav.module.scss';

export function Nav() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.name}>Scott Abbey</div>
			<nav>
				<ul className={styles.navList} role="list">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/posts">Posts</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
