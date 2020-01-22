const chalk = require('chalk');
const validator = require('validator');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg)

console.log(validator.isURL('http://fminiq.guru'));

console.log(chalk.green('success'));
console.log(chalk.yellow.bold('caution'));
console.log(chalk.black.bgRed('error'));