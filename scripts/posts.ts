import { readdir, readFile } from 'fs';
import matter from 'gray-matter';
import { extname, join } from 'path';
import { dataDir } from './config';

export interface Post {
	content: string;
	data: PostMetadata;
}

export interface PostMetadata {
	date?: string;
	excerpt?: string;
	filename: string;
	title: string;
}

const postsDir = join(dataDir, 'posts');

export async function listPosts() {
	const files = await new Promise<string[]>((resolve, reject) => {
		readdir(postsDir, (err, files) => {
			err ? reject(err) : resolve(files);
		});
	});

	return files.filter((file) => extname(file) === '.md');
}

export function assertRequiredPostMetadata(value: any): asserts value is PostMetadata {
	if (!value || typeof value !== 'object') {
		throw new Error('value is not an object');
	}
	if (typeof value.title !== 'string') {
		throw new Error('title is missing');
	}
	if (typeof value.filename !== 'string') {
		throw new Error('filename is missing');
	}
	if (value.date && isNaN(Number(new Date(value.date)))) {
		throw new Error('invalid date');
	}
}

export async function getPosts(): Promise<Post[]> {
	const files = await listPosts();
	const posts = await Promise.all(files.map((file) => getPost(file, assertRequiredPostMetadata)));

	return posts;
}

export async function getPost<T extends {}>(
	filename: string,
	check: { (value: any): asserts value is T }
): Promise<{ content: string; data: T }> {
	const filePath = join(postsDir, filename);
	console.log(filePath);
	const fileContents = await new Promise<string>((resolve, reject) => {
		readFile(filePath, 'utf8', (err, data) => {
			err ? reject(err) : resolve(data);
		});
	});
	const { content, data } = matter(fileContents);
	const metadata = { ...data, filename };

	check(metadata);

	return {
		content,
		data: metadata
	};
}

export function convertTextToSlug(title: string): string {
	return encodeURIComponent(title.replace(/\.md$/, '').replace(' ', '-'));
}
