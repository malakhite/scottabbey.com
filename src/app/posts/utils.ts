import fs from 'node:fs';
import path from 'node:path';

import type { PostParams } from './types';

export function getAllPosts(): PostParams[] {
	const postsDirectory = path.join(process.cwd(), 'src', 'content', 'posts');
	const posts: PostParams[] = fs
		.readdirSync(postsDirectory, { encoding: 'utf-8', recursive: true })
		.filter(
			(file) =>
				path.extname(file) === '.mdx' || path.extname(file) === '.md',
		)
		.sort((a, b) => (a > b ? -1 : 1))
		.map((file) => {
			const [year, month, fileName] = file.split(path.sep);
			const slug = fileName.replace(/\.mdx?$/, '');

			return { year, month, slug };
		});

	return posts;
}
