import { FC } from 'react';
import css from './TopBar.module.css';

export interface TopBarProps {}

export const TopBar: FC<TopBarProps> = ({ children }) => {
	return <div className={css.root}>{children}</div>;
};
