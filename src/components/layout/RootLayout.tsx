import { FC } from 'react';
import sidebar from '../../data/sidebar.json';
import { LinkDefinition, Nav } from '../Nav';
import { SiteHead } from '../SiteHead';
import css from './RootLayout.module.css';

export interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
	return (
		<div className={css.root}>
			<SiteHead />
			<div className={css.contents}>
				<Nav links={sidebar as LinkDefinition[]} />
				{children}
			</div>
		</div>
	);
};

export default RootLayout;
