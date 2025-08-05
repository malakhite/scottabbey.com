import React from 'react';

export interface PostParams {
	year: string;
	month: string;
	slug: string;
}

export interface PostImport {
	default: React.FC;
	frontmatter: Frontmatter;
}

export interface Frontmatter {
	title?: string;
	summary?: string;
	published: string;
}
