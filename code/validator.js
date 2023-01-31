import validator from 'validator';
import chalk from 'chalk';

const log = console.log;

const validateEmails = async (validateEmailsArr) => {
	validateEmailsArr.forEach((validateEmail) => {
		log(`Is ${validateEmail} a valid email: ${chalk.yellow(validator.isEmail(validateEmail))}`);
	});
};

export default async () => {
	await validateEmails(['foo@bar.com', 'foobar']);
};
