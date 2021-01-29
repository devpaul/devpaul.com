import { FC } from 'react';
import css from './LinkBar.module.css';

export interface LinkBarProps {}

export const LinkBar: FC<LinkBarProps> = ({ children }) => {
	return <div className={css.root}>{children}</div>;
};
