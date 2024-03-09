import readlineSync from 'readline-sync';
import _ from 'lodash';

const app = (question, expectAnswer, howMuchRounds = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = _.capitalize(readlineSync.question('May I have your name?'));
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < howMuchRounds + 1; i += 1) {
    if (i === howMuchRounds) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`Question: ${question[i]}`);
      const answer = readlineSync.question('Your answer:');
      if (answer === expectAnswer[i]) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectAnswer[i]}'.\nLet's try again, ${name}`);
        break;
      }
    }
  }
};
export default app;
