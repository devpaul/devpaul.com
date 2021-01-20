import cn from 'classnames';
import { FC } from 'react';
import { Icon, IconName } from './icon';
import css from './Nav.module.css';
export interface NavProps {
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

export const Nav: FC<NavProps> = ({ links, color = 'white', expandable }) => {
	return (
		<nav className={css.root}>
			<ul className={css.ul}>
				{links.map((link) => (
					<NavLink key={link.url} color={color} {...link} />
				))}
			</ul>
		</nav>
	);
};

export interface NavLinkProps extends LinkDefinition {
	color: string;
}

const NavLink: FC<NavLinkProps> = ({ url, icon, name }) => (
	<li className={cn(css.li)} data-icon={icon}>
		<a href={url} rel="noopener noreferrer" target="_blank">
			<Icon name={icon} label={name} size="25px" className={css.defaultIcon} />
		</a>
	</li>
);
