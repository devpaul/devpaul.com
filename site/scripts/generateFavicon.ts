import { join } from 'path';
import sharp from 'sharp';
import { dataDir, publicDir } from './config';

export async function generate() {
	const icoSizes = [16, 32];
	const appleSizes = [48, 72, 96, 144, 192, 256, 384, 512];
	const sizes = [32, ...appleSizes];
	const favIconSvg = join(dataDir, 'favicon', 'favicon.svg');

	// TODO make favicon.ico

	for (const size of sizes) {
		console.log(`generating icon ${size}x${size} from ${favIconSvg}`);
		const target = join(publicDir, 'icons', `icon-${size}x${size}.png`);
		await sharp(favIconSvg).resize(size, size).toFile(target);
	}

	// TODO generate manifest
}
