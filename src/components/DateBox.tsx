import { FC } from 'react';

export interface DateBoxProps {
	day: number;
	month: number;
	year: number;
}

export const DateBox: FC<DateBoxProps> = ({ day, month, year }) => {
	const datetime = `${year}-${month}-${day}`;
	return (
		<time dateTime={datetime}>
			<div className="month">{month}</div>
			<div className="day">{day}</div>
			<div className="year">{year}</div>
		</time>
	);
};
