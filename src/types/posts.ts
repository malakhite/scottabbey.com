import type React from 'react';

export interface PostPathParams {
	year: string;
	month: string;
	slug: string;
}

export interface PostImport {
	default: React.FC;
	frontmatter: Frontmatter;
}

export interface Frontmatter {
	type: 'post' | 'update';
	title: string;
	published: string;
	summary?: string;
}
