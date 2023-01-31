import builtInFunc from './code/builtin.js';
import isBuiltInFunc from './code/is-built-in.js';
import validatorFunc from './code/validator.js';
import momentFunc from './code/moment.js';
import lodashFunc from './code/lodash.js';
import pickACardFunc from './code/pickacard.js';

(async () => {
	await builtInFunc();
	await isBuiltInFunc();
	await validatorFunc();
	await momentFunc();
	await lodashFunc();
	await pickACardFunc();
})();
