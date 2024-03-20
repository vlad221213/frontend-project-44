/* eslint-disable import/extensions */
/* eslint-disable no-console */
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
  return `${result}`;
};

const calcExpressions = (roundsCount = 3) => {
  let expression;
  const operatorArray = ['+', '-', '*'];
  const question = [];
  const expectAnswer = [];
  const questionsCount = roundsCount;
  for (let i = 0; i < questionsCount; i += 1) {
    expression = `${getRandomNumber(0, 99)} ${operatorArray[getRandomNumber(0, 2)]} ${getRandomNumber(0, 99)}`;
    question.push(expression);
    expectAnswer.push(stringToExpAndResult(question[i]));
  }
  const gamesRules = 'What is the result of the expression?';
  app(question, expectAnswer, gamesRules, roundsCount);
};
export default calcExpressions;
