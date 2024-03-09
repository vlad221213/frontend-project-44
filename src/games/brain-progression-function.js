/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import _ from 'lodash';
// eslint-disable-next-line import/extensions
import app from '../index.js';

const arrayGeneration = (array, arrayLength = 10, progressionStep = 2) => {
  let startingNumber = _.random(1, 9);
  for (let i = 0; i < arrayLength; i += 1) {
    array.push(startingNumber);
    startingNumber += progressionStep;
  }
  return array;
};

const brainProgressionFunction = (howMuchRounds = 3) => {
  let progressionStep;
  let skipPosition;
  const progressionArray = [];
  const question = [];
  const expectAnswer = [];
  for (let i = 0; i < howMuchRounds; i += 1) {
    progressionStep = _.random(2, 8);
    skipPosition = _.random(0, 9);
    arrayGeneration(progressionArray, 10, progressionStep);
    expectAnswer.push(`${progressionArray[skipPosition]}`);
    progressionArray.splice(skipPosition, 1, '..');
    question.push(progressionArray.join(' '));
    progressionArray.splice(0, 10);
  }
  console.log('Welcome to the Brain Games!');
  const name = _.capitalize(readlineSync.question('May I have your name?'));
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  app(question, expectAnswer, name, howMuchRounds);
};
export default brainProgressionFunction;
