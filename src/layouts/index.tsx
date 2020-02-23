import '../styles/normalize';
import 'modern-normalize';

import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';

import LayoutMain from '../components/LayoutMain';
import LayoutRoot from '../components/LayoutRoot';
import { Nav } from '../components/Nav';

interface StaticQueryProps {
	site: {
		siteMetadata: {
			title: string;
			description: string;
			keywords: string;
		};
	};
}

const IndexLayout: React.FC = ({ children }) => (
	<StaticQuery
		query={graphql`
			query IndexLayoutQuery {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`}
		render={(data: StaticQueryProps) => (
			<LayoutRoot>
				<Nav />
				<LayoutMain>{children}</LayoutMain>
			</LayoutRoot>
		)}
	/>
);

export default IndexLayout;
