import * as React from 'react';
import styled from '@emotion/styled';

import image from '../resources/Smile.png';

export interface AboutProps {
	name: string;
	image: string;
	description: string;
}

const StyledHeader = styled.header`
	margin-top: 70px;
	text-align: center;
	font-size: 20pt;
`;

const StyledP = styled.p`
	margin: 0 40px;
	font-size: 16pt;
`;

export const About: React.FC<AboutProps> = ({ name, description }) => (
	<>
		<StyledHeader>
			<img src={image} alt={name} />
			<h1>{name}</h1>
		</StyledHeader>
		<StyledP>{description}</StyledP>
	</>
);
