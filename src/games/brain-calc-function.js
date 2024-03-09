/* eslint-disable no-console */
import _ from 'lodash';
// eslint-disable-next-line import/extensions
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

const brainCalcFunction = (howMuchRounds = 3) => {
  let sum = '';
  let diff = '';
  let multiply = '';
  const operatorArray = [];
  const question = [];
  const expectAnswer = [];
  for (let i = 0; i < howMuchRounds; i += 1) {
    sum = `${_.random(0, 99)} + ${_.random(0, 99)}`;
    diff = `${_.random(0, 99)} - ${_.random(0, 99)}`;
    multiply = `${_.random(1, 10)} * ${_.random(1, 10)}`;
    operatorArray.push(sum, diff, multiply);
    question.push(operatorArray[_.random(0, 2)]);
    expectAnswer.push(_.toString(stringToExpAndResult(question[i])));
    operatorArray.splice(0, 3);
  }
  app(question, expectAnswer, howMuchRounds);
};
export default brainCalcFunction;
