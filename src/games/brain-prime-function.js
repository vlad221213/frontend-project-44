/* eslint-disable import/extensions */
/* eslint-disable no-console */
import getRandomNumber from '../utils.js';
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

const findPrimeNumber = (roundsCount = 3) => {
  const question = [];
  const expectAnswer = [];
  const questionsCount = roundsCount;
  for (let i = 0; i < questionsCount; i += 1) {
    question.push(getRandomNumber(2, 100));
    if (isNumberPrime(question[i])) {
      expectAnswer.push('yes');
    } else {
      expectAnswer.push('no');
    }
  }
  const gamesRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  app(question, expectAnswer, gamesRules, roundsCount);
};
export default findPrimeNumber;
