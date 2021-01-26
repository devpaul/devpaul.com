import cn from 'classnames';
import { FC } from 'react';
import { Date, splitDateString } from './Date';
import css from './FeedCard.module.css';
import { Icon } from './icon';

export interface FeedCardProps {
	title: string;
	subtitle?: string;
	date: string;
	description: string;
	link: string;
	image?: string;
	type: 'github' | 'writing' | 'meetup' | 'talkscript';
	tags: string[];
	additionalLinks?: AdditionalLink[];
	externalLink?: boolean;
}

export interface AdditionalLink {
	name: string;
	link: string;
}

export const FeedCard: FC<FeedCardProps> = ({
	additionalLinks,
	title,
	subtitle,
	date,
	link,
	type,
	description,
	externalLink,
	image
}) => {
	return (
		<div className={cn(css.root, css.elevation1)} data-type={type}>
			<a href={link} target={externalLink ? '_blank' : null}>
				<header className={css.header}>
					<div className={css.imgContainer}>
						<Image name={type} />
					</div>
					<div className={css.titleContainer}>
						<h1 className={css.title}>{title}</h1>
						<h3 className={css.subtitle}>{subtitle}</h3>
					</div>
					{externalLink && (
						<div className={css.external}>
							<Icon name="external" size="16px" />
						</div>
					)}
				</header>
				{image && (
					<div>
						<img src={`/photos/${image}`} className={css.picture} />
					</div>
				)}
				<div className={css.description}>{description}</div>
				<footer className={css.footer}>
					<Date {...splitDateString(date)} type="line" />
				</footer>
				{additionalLinks && additionalLinks.length > 0 && <AdditionalLinks links={additionalLinks} />}
			</a>
		</div>
	);
};

export interface AdditionalLinksProps {
	links: AdditionalLink[];
}

const AdditionalLinks: FC<AdditionalLinksProps> = ({ links }) => {
	return (
		<div className={css.additionalLinks}>
			{links.map(({ name, link }) => (
				<a href={link} target="_blank">
					{name}
				</a>
			))}
		</div>
	);
};

export interface ImageProps {
	name: FeedCardProps['type'];
}

export const Image: FC<ImageProps> = ({ name }) => {
	switch (name) {
		case 'talkscript':
			return <Icon size="32px" name="talkscript" />;
		case 'meetup':
			return <Icon size="32px" name="meetup" />;
		case 'writing':
			return <Icon size="32px" name="writing" />;
	}

	return null;
};
