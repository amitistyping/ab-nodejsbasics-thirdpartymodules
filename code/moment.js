import moment from 'moment';
import chalk from 'chalk';

const log = console.log;

const dispTodaysDayAndDate = async () => {
	log(`Today's day: ${chalk.redBright(moment().format('dddd'))}`);
	log(`Today's date: ${chalk.redBright(moment().format('MMM Do YYYY'))}`);
};

export default async () => {
	await dispTodaysDayAndDate();
};
