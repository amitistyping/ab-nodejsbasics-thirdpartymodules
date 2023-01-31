import lodash from 'lodash';
import chalk from 'chalk';

const log = console.log;
const checkDupArr = [1, 2, 8, 3, 9, 3, 3, 6, 3, 2, 3, 9, 8, 7, 7, 2, 9, 3, 8, 1];

const getUniqArrValues = async (checkArr) => {
	const uniqValuesArr = lodash.uniq(checkArr);
	log(`Unique array values: ${chalk.cyanBright(uniqValuesArr)}`);
	return uniqValuesArr;
};

export default async () => {
	await getUniqArrValues(checkDupArr);
};
