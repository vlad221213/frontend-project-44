import readlineSync from 'readline-sync';
import _ from 'lodash';

const app = (question, expectAnswer, gamesRules, roundsCount = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = _.capitalize(readlineSync.question('May I have your name?'));
  console.log(`Hello, ${name}!`);
  console.log(gamesRules);
  for (let i = 0; i < roundsCount + 1; i += 1) {
    if (i === roundsCount) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`Question: ${question[i]}`);
      const answer = readlineSync.question('Your answer:');
      if (answer === expectAnswer[i]) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectAnswer[i]}'.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }
  }
};
export default app;
