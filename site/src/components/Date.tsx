import { FC } from 'react';
import { ShortMonthName } from '../i18n/dates';
import cssBox from './Date.box.module.css';
import cssLine from './Date.line.module.css';

export interface DateProps {
	day: number;
	month: number;
	year: number;
	type?: 'line' | 'box';
}

export const Date: FC<DateProps> = ({ day, month, year, type }) => {
	const datetime = `${year}-${month}-${day}`;
	const monthStr = ShortMonthName[month - 1];
	const style = type === 'line' ? cssLine : cssBox;

	return (
		<time className={style.root} dateTime={datetime}>
			<div className={style.month}>{monthStr}</div>
			<div className={style.day}>{day}</div>
			<div className={style.year}>{year}</div>
		</time>
	);
};

export function splitDateString(date: string) {
	const [yearStr, monthStr, dayStr] = date.split('-');
	return {
		year: parseInt(yearStr),
		month: parseInt(monthStr),
		day: parseInt(dayStr)
	};
}
