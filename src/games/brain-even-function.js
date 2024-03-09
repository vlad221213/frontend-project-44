/* eslint-disable no-console */
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
  app(question, expectAnswer, howMuchRounds);
};
export default brainEvenFunction;
