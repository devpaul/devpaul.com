import * as React from 'react';
import { FaTwitter, FaGithub, FaMeetup, FaLinkedin } from 'react-icons/fa';
import { css } from '@emotion/core';
import talkscriptLogo from '../resources/TalkScript.svg';

export interface IconProps {
	name: IconName;
	color?: string;
	hover?: string;
}

export type IconName = 'twitter' | 'github' | 'meetup' | 'linkedin' | 'talkscript';

function getIconCss(color = 'white', hover = color) {
	return css({
		fontSize: '25px',
		color,
		':hover': {
			fill: hover
		}
	});
}

export const Icon: React.FC<IconProps> = ({ name, color, hover }) => {
	switch (name) {
		case 'twitter':
			return <FaTwitter css={getIconCss(color, hover)} />;
		case 'github':
			return <FaGithub css={getIconCss(color, hover)} />;
		case 'meetup':
			return <FaMeetup css={getIconCss(color, hover)} />;
		case 'linkedin':
			return <FaLinkedin css={getIconCss(color, hover)} />;
		case 'talkscript':
			return <img src={talkscriptLogo} width="30" alt="talkscript" />;
		default:
			return <i css={getIconCss(color, hover)} />;
	}
};
