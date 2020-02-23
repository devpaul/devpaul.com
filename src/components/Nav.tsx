import styled from '@emotion/styled';
import * as React from 'react';

import logo from '../resources/gear.svg';
import { Icon, IconName } from './Icon';

const boxStyles = {
	display: 'flex',
	'justify-content': 'center',
	'align-items': 'center',
	width: '70px',
	height: '70px'
};

const StyledNav = styled.nav({
	display: 'inline-block',
	height: '100vh',
	width: '70px',
	'background-color': '#242424'
});
const StyledList = styled.ul({
	margin: 0,
	padding: 0
});
const StyledListItem = styled.li({
	...boxStyles,
	'list-style': 'none'
});
const SiteIcon = styled.div({
	...boxStyles,
	'background-color': '#0A97B2'
});
const LogoImage = styled.img({
	':hover': {
		transform: 'rotate(45deg)'
	}
});

export interface NavProperties {
	links: LinkDefinition[];
}

export interface LinkDefinition {
	name: string;
	url: string;
	icon: IconName;
	hover: string;
}

export const Nav: React.FC<NavProperties> = ({ links = [] }) => (
	<StyledNav>
		<StyledList>
			<StyledListItem>
				<SiteIcon>
					<LogoImage src={logo} width="40" alt="home icon" />
				</SiteIcon>
			</StyledListItem>
			{links.map((link) => (
				<StyledListItem>
					<a href={link.url} rel="noopener noreferrer" target="_blank">
						<Icon name={link.icon} />
					</a>
				</StyledListItem>
			))}
		</StyledList>
	</StyledNav>
);
