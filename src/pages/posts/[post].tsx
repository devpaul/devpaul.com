import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { FC } from 'react';
import { convertTextToSlug, getPosts } from '../../../scripts/posts';
import RootLayout from '../../components/layout/RootLayout';

export interface PostProps {}

export const Post: FC<PostProps> = () => {
	return (
		<RootLayout>
			<div>hello</div>
		</RootLayout>
	);
};

export const getStaticProps: GetStaticProps<PostProps, PathParams> = async ({ params }) => {
	return {
		props: {
			params
		}
	};
};

interface PathParams extends ParsedUrlQuery {
	post: string;
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
	const slugs = (await getPosts()).map(({ data: { filename } }) => ({
		params: { post: convertTextToSlug(filename) }
	}));
	return {
		paths: slugs,
		fallback: false
	};
};

export default Post;
