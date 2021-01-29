import { FC } from 'react';
import css from './About.module.css';

export interface AboutProps {}

export const About: FC<AboutProps> = () => (
	<>
		<header className={css.header}>
			<img src="/Smile.png" alt="Paul Shannon picture" width="228" height="241" />
			<h1 className={css.name}>Paul Shannon</h1>
		</header>
		<p>
			Hello! I am a full-stack engineer with over fifteen years of experience. I enjoy exploring the boundaries of
			technology and am an avid fan of TypeScript, JavaScript, and all things immersive. As constant learner and
			teacher, I have been a co-host of{' '}
			<a href="https://www.meetup.com/Phoenix-TypeScript/">Phoenix TypeScript</a>, a panelist on the{' '}
			<a href="http://talkscript.fm">TalkScript</a> podcast, and a speaker. I am based in Phoenix and have been
			working remotely since 2014. Welcome.
		</p>
	</>
);
