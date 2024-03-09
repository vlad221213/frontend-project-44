/* eslint-disable no-console */
import _ from 'lodash';
// eslint-disable-next-line import/extensions
import app from '../index.js';

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
    while (oneNumber !== 0 && twoNumber !== 0) {
      if (oneNumber > twoNumber) {
        oneNumber %= twoNumber;
      } else {
        twoNumber %= oneNumber;
      }
    }
    gsd = oneNumber + twoNumber;
    expectAnswer.push(`${gsd}`);
  }
  app(question, expectAnswer, howMuchRounds);
};
export default brainGsdFunction;
