/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import _ from 'lodash';
// eslint-disable-next-line import/extensions
import app from '../index.js';

const greatestCommonDivisor = (oneNumber, twoNumber) => {
  let a = oneNumber;
  let b = twoNumber;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  const gcd = a + b;
  return gcd;
};

const brainGcdFunction = (howMuchRounds = 3) => {
  let oneNumber;
  let twoNumber;
  let gcd;
  const question = [];
  const expectAnswer = [];
  for (let i = 0; i < howMuchRounds; i += 1) {
    oneNumber = _.random(0, 100);
    twoNumber = _.random(0, 100);
    question.push(`${oneNumber} ${twoNumber}`);
    gcd = greatestCommonDivisor(oneNumber, twoNumber);
    expectAnswer.push(`${gcd}`);
  }
  console.log('Welcome to the Brain Games!');
  const name = _.capitalize(readlineSync.question('May I have your name?'));
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  app(question, expectAnswer, name, howMuchRounds);
};
export default brainGcdFunction;
