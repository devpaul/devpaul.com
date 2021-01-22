import Head from 'next/head';
import { About } from '../components/About';
import RootLayout from '../components/layout/RootLayout';
import css from './index.module.css';

export default function Home() {
	return (
		<RootLayout>
			<Head>
				<title>dev/Paul</title>
			</Head>
			<main className={css.main}>
				<About />
			</main>
		</RootLayout>
	);
}
