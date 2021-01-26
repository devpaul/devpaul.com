import Link from 'next/link';
import { FC } from 'react';
import { use } from '../env';
import css from './SiteHead.module.css';

export interface SiteHeadProps {}

export const SiteHead: FC<SiteHeadProps> = () => {
	return (
		<div className={css.root}>
			<Logo />
			<ul className={css.list}>
				<SiteLink label="About" link="/" />
				<SiteLink label="Feed" link="/feed" />
				{use('BLOG') && <SiteLink label="Blog" link="/blog" />}
			</ul>
		</div>
	);
};

const Logo: FC = () => <div className={css.logo}></div>;

interface SiteLinkProps {
	label: string;
	link: string;
}

const SiteLink: FC<SiteLinkProps> = ({ label, link }) => (
	<li className={css.item}>
		<Link href={link}>
			<a className={css.link}>{label}</a>
		</Link>
	</li>
);
