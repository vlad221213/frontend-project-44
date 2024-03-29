/* eslint-disable import/extensions */
/* eslint-disable no-console */
import getRandomNumber from '../utils.js';
import app from '../index.js';

const isNumberEven = (number) => {
  let result;
  if (number % 2 === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

const findEvenNumber = (roundsCount = 3) => {
  let number = 0;
  const question = [];
  const expectAnswer = [];
  const questionsCount = roundsCount;
  for (let i = 0; i < questionsCount; i += 1) {
    number = getRandomNumber(0, 99);
    question.push(number);
    if (isNumberEven(number)) {
      expectAnswer.push('yes');
    } else {
      expectAnswer.push('no');
    }
  }
  const gamesRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  app(question, expectAnswer, gamesRules, roundsCount);
};
export default findEvenNumber;
