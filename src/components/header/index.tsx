import Link from 'next/link';

import styles from './header.module.scss';

export function Header() {
	return (
		<div className={styles.wrapper}>
			<Link href="https://scottabbey.com" rel="me" className={styles.name}>
				Scott Abbey
			</Link>
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
