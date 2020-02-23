import '../styles/normalize';
import 'modern-normalize';

import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';

import LayoutMain from '../components/LayoutMain';
import LayoutRoot from '../components/LayoutRoot';
import { Nav, LinkDefinition } from '../components/Nav';

interface StaticQueryProps {
	allSidebarJson: {
		edges: {
			node: LinkDefinition;
		}[];
	};
}

export const IndexLayout: React.FC = ({ children }) => (
	<StaticQuery
		query={graphql`
			query OverviewLayoutQuery {
				allSidebarJson {
					edges {
						node {
							name
							url
							icon
							hover
						}
					}
				}
			}
		`}
		render={(data: StaticQueryProps) => (
			<LayoutRoot>
				<Nav links={data?.allSidebarJson?.edges.map((edge) => edge.node)} />
				<LayoutMain>{children}</LayoutMain>
			</LayoutRoot>
		)}
	/>
);
