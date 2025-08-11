import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [],
		sitemap: 'https://scottabbey.com/sitemap.xml',
	};
}
