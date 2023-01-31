import builtinModules from 'builtin-Modules';
import chalk from 'chalk';

const log = console.log;

export default async () => {
	log(chalk.green(builtinModules));
};
