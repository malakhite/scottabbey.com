import { getFrontMatter, getPostPathParams } from '@/app/(frontend)/posts/utils';
import { PAGE_SIZE } from '@/constants';
import { PostList as PostListClient } from './post-list-client';

interface PostListProps {
	className?: string;
	pageSize?: number;
	pages?: number;
}

export async function PostList({ className, pages, pageSize = PAGE_SIZE }: PostListProps) {
	const postsParams = getPostPathParams();
	const postsCount = pages ? pages * pageSize : postsParams.length;
	const posts = (
		await Promise.all(
			postsParams.map(async (params) => {
				const frontmatter = await getFrontMatter(params);
				return { params, frontmatter };
			}),
		)
	).slice(0, postsCount);

	return <PostListClient className={className} posts={posts} pageSize={pageSize} />;
}
