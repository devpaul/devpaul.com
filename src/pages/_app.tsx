import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Favicon } from '../components/Favicon';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Favicon generatedId="buildId" />
			<Component {...pageProps} />
		</>
	);
}

export default App;
