import '../styles/normalize';
import 'modern-normalize';

import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';

import { IndexLayout } from '.';
import { About } from '../components/About';

interface StaticQueryProps {
	site: {
		siteMetadata: {
			author: {
				name: string;
				about: string;
				image: string;
			};
		};
	};
}

export const AboutLayout: React.FC = ({ children }) => (
	<StaticQuery
		query={graphql`
			query AboutLayoutQuery {
				site {
					siteMetadata {
						author {
							name
							about
						}
					}
				}
			}
		`}
		render={({
			site: {
				siteMetadata: { author }
			}
		}: StaticQueryProps) => (
			<IndexLayout>
				<About name={author.name} description={author.about} image={author.image} />
				{children}
			</IndexLayout>
		)}
	/>
);
