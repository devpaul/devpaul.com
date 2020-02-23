import styled from '@emotion/styled';
import * as React from 'react';
import { FaGithub, FaLinkedin, FaMeetup, FaTwitter } from 'react-icons/fa';

import logo from '../resources/gear.svg';
import talkscriptLogo from '../resources/TalkScript.svg';

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
const [TwitterLogo, GithubLogo, LinkedInLogo, MeetupLogo] = [FaTwitter, FaGithub, FaLinkedin, FaMeetup].map((Logo, i) =>
	styled(Logo)({
		'font-size': '25px',
		color: 'white',
		':hover': {
			color: ['#1da1f2', 'white', '#0A97B2', '#F64060'][i]
		}
	})
);

export const Nav: React.FC = () => (
	<StyledNav>
		<StyledList>
			<StyledListItem>
				<SiteIcon>
					<LogoImage src={logo} width="40" alt="home icon" />
				</SiteIcon>
			</StyledListItem>
			<StyledListItem>
				<a href="https://twitter.com/developerpaul" rel="noopener noreferrer" target="_blank">
					<TwitterLogo />
				</a>
			</StyledListItem>
			<StyledListItem>
				<a href="https://github.com/devpaul" rel="noopener noreferrer" target="_blank">
					<GithubLogo />
				</a>
			</StyledListItem>
			<StyledListItem>
				<a href="https://www.linkedin.com/in/paulshannon/" rel="noopener noreferrer" target="_blank">
					<LinkedInLogo />
				</a>
			</StyledListItem>
			<StyledListItem>
				<a href="http://talkscript.fm" rel="noopener noreferrer" target="_blank">
					<img src={talkscriptLogo} width="30" alt="talkscript.fm logo" />
				</a>
			</StyledListItem>
			<StyledListItem>
				<a href="https://www.meetup.com/Phoenix-TypeScript/" rel="noopener noreferrer" target="_blank">
					<MeetupLogo />
				</a>
			</StyledListItem>
		</StyledList>
	</StyledNav>
);
