import isBuiltInModule from 'is-builtin-module';
import chalk from 'chalk';

const log = console.log;

const checkIsModuleBuiltIn = async (packageNames) => {
	packageNames.forEach((packageName) => {
		log(`Is ${packageName} built in: ${chalk.yellow(isBuiltInModule(packageName))}`);
	});
};

export default async () => {
	await checkIsModuleBuiltIn(['crypto', 'unicorn']);
};
