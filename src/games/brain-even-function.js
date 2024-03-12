/* eslint-disable import/extensions */
/* eslint-disable no-console */
import getRandomNumber from '../utils.js';
import app from '../index.js';

const isNumberEven = (roundsCount = 3) => {
  let number = 0;
  const question = [];
  const expectAnswer = [];
  const questionsCount = roundsCount;
  for (let i = 0; i < questionsCount; i += 1) {
    number = getRandomNumber(0, 99);
    question.push(number);
    if (number % 2 === 0) {
      expectAnswer.push('yes');
    } else {
      expectAnswer.push('no');
    }
  }
  const gamesRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  app(question, expectAnswer, gamesRules, roundsCount);
};
export default isNumberEven;
