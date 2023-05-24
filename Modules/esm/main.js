import hello from './hello.js';
import { sum, sub } from './my-math.js'
import chalk from 'chalk';

console.log(chalk.bgBlue(hello('Romain'))); // Hello Romain
console.log(sum(1, 2)); // 3
console.log(sub(10, 3)); // 7
