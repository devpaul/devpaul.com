import cn from 'classnames';
import { FC } from 'react';
import css from './Pane.module.css';

export interface PaneProps {
	className?: string;
}

export const Pane: FC<PaneProps> = ({ children, className }) => {
	return <div className={cn(css.root, className)}>{children}</div>;
};
