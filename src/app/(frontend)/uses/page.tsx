import { cx } from 'class-variance-authority';

import Uses from '@/content/uses.mdx';

export default function Page() {
	return (
		<main className={cx('content')}>
			<Uses />
		</main>
	);
}
