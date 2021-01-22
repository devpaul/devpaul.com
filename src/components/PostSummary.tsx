import { FC } from 'react';
import { PostMetadata } from '../../scripts/posts';
import { DateBox } from './DateBox';

export interface PostSummaryProps extends Omit<PostMetadata, 'filename'> {
	img?: string;
	url: string;
}

export const PostSummary: FC<PostSummaryProps> = ({ title, excerpt, date, url }) => {
	const { year, month, day } = splitDateString(date);

	return (
		<article>
			<div>
				<DateBox year={year} month={month} day={day} />
				<h1>
					<a href={url}>{title}</a>
				</h1>
			</div>
			<details>{excerpt}</details>
		</article>
	);
};

function splitDateString(date: string) {
	const [yearStr, monthStr, dayStr] = date.split('-');
	return {
		year: parseInt(yearStr),
		month: parseInt(monthStr),
		day: parseInt(dayStr)
	};
}
