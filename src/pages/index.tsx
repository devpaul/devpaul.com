import { About } from '../components/About';
import { Pane } from '../components/layout/Pane';
import { RootLayout } from '../components/layout/RootLayout';
import css from './index.module.css';

export default function Home() {
	return (
		<RootLayout>
			<Pane className={css.content}>
				<About />
			</Pane>
		</RootLayout>
	);
}
