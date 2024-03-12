/* eslint-disable import/extensions */
/* eslint-disable no-console */
import getRandomNumber from '../utils.js';
import app from '../index.js';

const arrayGeneration = (array, arrayLength = 10, progressionStep = 2) => {
  let startingNumber = getRandomNumber(1, 9);
  for (let i = 0; i < arrayLength; i += 1) {
    array.push(startingNumber);
    startingNumber += progressionStep;
  }
  return array;
};

const findProgressionNumber = (roundsCount = 3) => {
  let progressionStep;
  let skipPosition;
  const progressionArray = [];
  const question = [];
  const expectAnswer = [];
  const questionsCount = roundsCount;
  for (let i = 0; i < questionsCount; i += 1) {
    progressionStep = getRandomNumber(2, 8);
    skipPosition = getRandomNumber(0, 9);
    arrayGeneration(progressionArray, 10, progressionStep);
    expectAnswer.push(`${progressionArray[skipPosition]}`);
    progressionArray.splice(skipPosition, 1, '..');
    question.push(progressionArray.join(' '));
    progressionArray.splice(0, 10);
  }
  const gamesRules = 'What number is missing in the progression?';
  app(question, expectAnswer, gamesRules, roundsCount);
};
export default findProgressionNumber;
