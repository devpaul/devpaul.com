import { join } from 'path';

export const projectRoot = join(process.env.PROJECT_ROOT ?? process.cwd());

export const dataDir = join(projectRoot, 'data');

export const postsDir = join(dataDir, '_posts');

export const publicDir = join(projectRoot, 'public');
