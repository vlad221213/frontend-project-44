/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import readlineSync from 'readline-sync';
import _ from 'lodash';

const brainEvenFunction = () => {
  console.log('Welcome to the Brain Games!');
  const name = _.capitalize(readlineSync.question('May I have your name?'));
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 4; i += 1) {
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    } else {
      const number = _.random(1, 99);
      console.log(`Question: ${number}`);
      const answer = readlineSync.question('Your answer:');
      if ((number % 2 === 0 && answer === 'yes') || (number % 2 === 1 && answer === 'no')) {
        console.log('Correct!');
      } else if (number % 2 === 0) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}`);
        break;
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`);
        break;
      }
    }
  }
};
export default brainEvenFunction;
