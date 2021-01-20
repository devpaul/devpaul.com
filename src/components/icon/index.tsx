import { FC } from 'react';
import { FaGithub, FaLinkedin, FaMeetup, FaTwitter } from 'react-icons/fa';
import TalkScriptIcon from './TalkScript';

export interface IconProps {
	name: IconName;
	size?: string;
	label?: string;
	className?: string;
}

const iconMap = {
	twitter: FaTwitter,
	github: FaGithub,
	meetup: FaMeetup,
	linkedin: FaLinkedin,
	talkscript: TalkScriptIcon
};

export type IconName = keyof typeof iconMap;

export const Icon: FC<IconProps> = ({ name, label, size, className }) => {
	const ReactIcon = iconMap[name];

	if (ReactIcon) {
		return <ReactIcon role="img" title={label} size={size} className={className} />;
	}

	return (
		<i style={{ fontSize: size || '1em' }} className={className}>
			{label}
		</i>
	);
};
