/* eslint-disable no-console */
import _ from 'lodash';
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import app from '../index.js';

const isNumberPrime = (number) => {
  if (number === 2) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
};
const brainPimeFunction = (howMuchRounds = 3) => {
  const question = [];
  const expectAnswer = [];
  for (let i = 0; i < howMuchRounds; i += 1) {
    question.push(_.random(2, 100));
    if (isNumberPrime(question[i]) === true) {
      expectAnswer.push('yes');
    } else {
      expectAnswer.push('no');
    }
  }
  console.log('Welcome to the Brain Games!');
  const name = _.capitalize(readlineSync.question('May I have your name?'));
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  app(question, expectAnswer, name, howMuchRounds);
};
export default brainPimeFunction;
