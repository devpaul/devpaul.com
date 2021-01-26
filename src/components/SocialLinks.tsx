import cn from 'classnames';
import { FC } from 'react';
import { Icon, IconName } from './icon';
import css from './SocialLinks.module.css';

export interface SocialLinksProps {
	links: LinkDefinition[];
	color?: string;
	expandable?: boolean;
}

export interface LinkDefinition {
	name: string;
	url: string;
	icon: IconName;
	hover: string;
}

export const SocialLinks: FC<SocialLinksProps> = ({ links, color = 'white', expandable }) => {
	return (
		<nav className={css.root}>
			<ul className={css.ul}>
				{links.map((link) => (
					<LinkItem key={link.url} color={color} {...link} />
				))}
			</ul>
		</nav>
	);
};

export interface LinkItemProps extends LinkDefinition {
	color: string;
}

const LinkItem: FC<LinkItemProps> = ({ url, icon, name }) => (
	<li className={cn(css.li)} data-icon={icon}>
		<a href={url} rel="noopener noreferrer" target="_blank">
			<Icon name={icon} label={name} size="25px" className={css.defaultIcon} />
		</a>
	</li>
);
