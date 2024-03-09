/* eslint-disable no-console */
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
  app(question, expectAnswer, howMuchRounds);
};
export default brainGcdFunction;
