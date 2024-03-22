/* eslint-disable import/extensions */
/* eslint-disable no-console */
import getRandomNumber from '../utils.js';
import app from '../index.js';

const getCorrectAnswer = (firstNumber, secondNumber, operator) => {
  let result = 0;
  if (operator === '+') {
    result = Number(firstNumber) + Number(secondNumber);
  } else if (operator === '-') {
    result = Number(firstNumber) - Number(secondNumber);
  } else {
    result = Number(firstNumber) * Number(secondNumber);
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
    const arrayExp = expression.split(' ');
    expectAnswer.push(getCorrectAnswer(arrayExp[0], arrayExp[2], arrayExp[1]));
  }
  const gamesRules = 'What is the result of the expression?';
  app(question, expectAnswer, gamesRules, roundsCount);
};
export default calcExpressions;
