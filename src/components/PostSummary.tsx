import { FC } from 'react';
import { PostMetadata } from '../../scripts/posts';
import { Date, splitDateString } from './Date';
import css from './PostSummary.module.css';

export interface PostSummaryProps extends Omit<PostMetadata, 'filename'> {
	img?: string;
	url: string;
}

export const PostSummary: FC<PostSummaryProps> = ({ title, excerpt, date, url }) => {
	const { year, month, day } = splitDateString(date);

	return (
		<article className={css.root}>
			<div className={css.head}>
				<Date year={year} month={month} day={day} />
				<h1 className={css.title}>
					<a href={url}>{title}</a>
				</h1>
			</div>
			<div>{excerpt}</div>
		</article>
	);
};
