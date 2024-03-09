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
  const gsd = a + b;
  return gsd;
};

const brainGsdFunction = (howMuchRounds = 3) => {
  let oneNumber;
  let twoNumber;
  let gsd;
  const question = [];
  const expectAnswer = [];
  for (let i = 0; i < howMuchRounds; i += 1) {
    oneNumber = _.random(0, 100);
    twoNumber = _.random(0, 100);
    question.push(`${oneNumber} ${twoNumber}`);
    gsd = greatestCommonDivisor(oneNumber, twoNumber);
    expectAnswer.push(`${gsd}`);
  }
  app(question, expectAnswer, howMuchRounds);
};
export default brainGsdFunction;
