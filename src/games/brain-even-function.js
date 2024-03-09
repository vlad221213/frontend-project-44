/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import _ from 'lodash';
// eslint-disable-next-line import/extensions
import app from '../index.js';

const brainEvenFunction = (howMuchRounds = 3) => {
  let number = 0;
  const question = [];
  const expectAnswer = [];
  for (let i = 0; i < howMuchRounds; i += 1) {
    number = _.random(0, 99);
    question.push(number);
    if (number % 2 === 0) {
      expectAnswer.push('yes');
    } else {
      expectAnswer.push('no');
    }
  }
  console.log('Welcome to the Brain Games!');
  const name = _.capitalize(readlineSync.question('May I have your name?'));
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  app(question, expectAnswer, name, howMuchRounds);
};
export default brainEvenFunction;
