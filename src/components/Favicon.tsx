import Head from 'next/head';
import { FC } from 'react';

const appleSizes = [48, 72, 96, 144, 192, 256, 384, 512];

export interface FaviconProps {
	generatedId: string;
}

export const Favicon: FC<FaviconProps> = ({ generatedId }) => {
	return (
		<Head>
			<link rel="icon" href={`/favicon-32x32.png?v=${generatedId}`} type="image/png" />
			<link rel="icon" href={`/favicon.svg?v=${generatedId}`} type="image/svg+xml" />
			<link rel="manifest" href="/manifest.webmanifest" />
			<meta name="theme-color" content="#242424" />
			{appleSizes.map((size) => (
				<link
					key={`icon-${size}`}
					rel="apple-touch-icon"
					sizes={`${size}x${size}`}
					href={`/icons/icon-${size}x${size}.png?v=${generatedId}`}
				/>
			))}
		</Head>
	);
};
