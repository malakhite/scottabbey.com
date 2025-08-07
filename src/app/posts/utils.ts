import fs from 'node:fs';
import path from 'node:path';

import type { Frontmatter, PostImport, PostPathParams } from './types';

export function getPostPathParams(): PostPathParams[] {
	const postsDirectory = path.join(process.cwd(), 'src', 'content', 'posts');
	const posts: PostPathParams[] = fs
		.readdirSync(postsDirectory, { encoding: 'utf-8', recursive: true })
		.filter((file) => path.extname(file) === '.mdx' || path.extname(file) === '.md')
		.sort((a, b) => (a > b ? -1 : 1))
		.map((file) => {
			const [year, month, fileName] = file.split(path.sep);
			const slug = fileName.replace(/\.mdx?$/, '');

			return { year, month, slug };
		});

	return posts;
}

export async function importPost(pathParams: PostPathParams): Promise<PostImport> {
	return (await import(`@/content/posts/${pathParams.year}/${pathParams.month}/${pathParams.slug}.mdx`)) as PostImport;
}

export async function getFrontMatter(pathParams: PostPathParams): Promise<Frontmatter> {
	const { frontmatter } = await importPost(pathParams);
	return frontmatter;
}
