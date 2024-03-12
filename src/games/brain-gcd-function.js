/* eslint-disable import/extensions */
/* eslint-disable no-console */
import getRandomNumber from '../utils.js';
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

const findGcd = (roundsCount = 3) => {
  let oneNumber;
  let twoNumber;
  let gcd;
  const question = [];
  const expectAnswer = [];
  const questionsCount = roundsCount;
  for (let i = 0; i < questionsCount; i += 1) {
    oneNumber = getRandomNumber(0, 100);
    twoNumber = getRandomNumber(0, 100);
    question.push(`${oneNumber} ${twoNumber}`);
    gcd = greatestCommonDivisor(oneNumber, twoNumber);
    expectAnswer.push(`${gcd}`);
  }
  const gamesRules = 'Find the greatest common divisor of given numbers.';
  app(question, expectAnswer, gamesRules, roundsCount);
};
export default findGcd;
