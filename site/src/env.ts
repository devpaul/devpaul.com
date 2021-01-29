export type FeatureFlag = 'BLOG';

export type FlagMap = { [K in FeatureFlag]: boolean };

const Flags: FlagMap = {
	BLOG: process.env.ENABLE_BLOG === 'true'
};

export function use(flag: FeatureFlag): boolean {
	return Boolean(Flags[flag]);
}
