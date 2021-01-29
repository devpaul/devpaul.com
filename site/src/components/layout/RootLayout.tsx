import cn from 'classnames';
import Head from 'next/head';
import { FC } from 'react';
import sidebar from '../../../data/sidebar.json';
import { SiteHead } from '../SiteHead';
import { LinkDefinition, SocialLinks } from '../SocialLinks';
import { LinkBar } from './LinkBar';
import css from './RootLayout.module.css';
import { TopBar } from './TopBar';

export interface RootLayoutProps {
	title?: string;
	scrollable?: boolean;
}

export const RootLayout: FC<RootLayoutProps> = ({ title, scrollable, children }) => {
	return (
		<div className={css.root}>
			<Head>
				<title>dev/Paul{title ? ` - ${title}` : ''}</title>
			</Head>
			<TopBar>
				<SiteHead />
			</TopBar>
			<div className={cn(css.contents, !scrollable && css.fixedContent)}>
				<main className={css.main}>{children}</main>
			</div>
			<LinkBar>
				<SocialLinks links={sidebar as LinkDefinition[]} />
			</LinkBar>
		</div>
	);
};
