/* eslint-disable import/extensions */
/* eslint-disable no-console */
import _ from 'lodash';
import getRandomNumber from '../utils.js';
import app from '../index.js';

const stringToExpAndResult = (string) => {
  const arrayExp = string.split(' ');
  let result = 0;
  if (arrayExp[1] === '+') {
    result = Number(arrayExp[0]) + Number(arrayExp[2]);
  } else if (arrayExp[1] === '-') {
    result = Number(arrayExp[0]) - Number(arrayExp[2]);
  } else {
    result = Number(arrayExp[0]) * Number(arrayExp[2]);
  }
  return result;
};

const calcExpressions = (roundsCount = 3) => {
  let sum = '';
  let diff = '';
  let multiply = '';
  const operatorArray = [];
  const question = [];
  const expectAnswer = [];
  const questionsCount = roundsCount;
  for (let i = 0; i < questionsCount; i += 1) {
    sum = `${getRandomNumber(0, 99)} + ${getRandomNumber(0, 99)}`;
    diff = `${getRandomNumber(0, 99)} - ${getRandomNumber(0, 99)}`;
    multiply = `${getRandomNumber(1, 10)} * ${getRandomNumber(1, 10)}`;
    operatorArray.push(sum, diff, multiply);
    question.push(operatorArray[getRandomNumber(0, 2)]);
    expectAnswer.push(_.toString(stringToExpAndResult(question[i])));
    operatorArray.splice(0, 3);
  }
  const gamesRules = 'What is the result of the expression?';
  app(question, expectAnswer, gamesRules, roundsCount);
};
export default calcExpressions;
