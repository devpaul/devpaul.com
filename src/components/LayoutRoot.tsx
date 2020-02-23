import * as React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import normalize from '../styles/normalize';
import bgImage from '../resources/bg.jpg';

const StyledLayoutRoot = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const globalStyles = `
	${normalize}

	body {
		background: white url(${bgImage}) no-repeat center center
	}
`;

interface LayoutRootProps {
	className?: string;
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
	<>
		<Global styles={() => css(globalStyles)} />
		<StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
	</>
);

export default LayoutRoot;
