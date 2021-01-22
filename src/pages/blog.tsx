import { GetStaticProps } from 'next';
import { FC } from 'react';
import { convertTextToSlug, getPosts, PostMetadata } from '../../scripts/posts';
import RootLayout from '../components/layout/RootLayout';
import { PostSummary } from '../components/PostSummary';

interface BlogProps {
	posts: Post[];
}

interface Post extends PostMetadata {
	url: string;
}

export const Blog: FC<BlogProps> = ({ posts }) => {
	return (
		<RootLayout>
			{posts.map((post) => {
				return <PostSummary {...post} />;
			})}
		</RootLayout>
	);
};

const basePostPath = 'posts';

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
	const posts = (await getPosts()).map(({ data }) => ({
		...data,
		url: `${basePostPath}/${convertTextToSlug(data.filename)}`
	}));
	return {
		props: {
			posts
		}
	};
};

export default Blog;
