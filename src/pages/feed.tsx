import { GetStaticProps } from 'next';
import { FC } from 'react';
import meetups from '../../data/meetups.json';
import talkscript from '../../data/talkscript.json';
import writing from '../../data/writing.json';
import { FeedCard, FeedCardProps } from '../components/FeedCard';
import { RootLayout } from '../components/layout/RootLayout';
import css from './feed.module.css';

export interface FeedProps {
	feed: FeedCardProps[];
}

export const Feed: FC<FeedProps> = ({ feed }) => {
	return (
		<RootLayout title="Activity">
			<div className={css.feedPane}>
				{feed.map((item) => {
					return <FeedCard key={item.link + item.date} {...item} />;
				})}
			</div>
		</RootLayout>
	);
};

function getPodcastData(): FeedCardProps[] {
	return talkscript.map((data) => ({
		title: data.title,
		subtitle: `${data.podcast} Ep.${data.episode}`,
		date: data.publishDate,
		description: data.description,
		link: data.link,
		type: 'talkscript',
		tags: [],
		externalLink: true
	}));
}

function getMeetupData(): FeedCardProps[] {
	return meetups.map((data) => ({
		title: data.title,
		date: data.date,
		description: data.description,
		link: data.link,
		type: 'meetup',
		tags: [],
		externalLink: true,
		image: data.img || null,
		additionalLinks: data.additionalLinks || null
	}));
}

function getWriting(): FeedCardProps[] {
	return writing.map((data) => ({
		title: data.title,
		subtitle: data.subtitle || null,
		date: data.date,
		description: data.description,
		link: data.link,
		type: 'writing',
		tags: [],
		externalLink: true,
		additionalLinks: data.additionalLinks || null
	}));
}

function dateSort(a, b) {
	return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
}

export const getStaticProps: GetStaticProps<FeedProps> = async () => {
	const feed = [...getWriting(), ...getPodcastData(), ...getMeetupData()].sort(dateSort);
	return {
		props: {
			feed
		}
	};
};

export default Feed;
