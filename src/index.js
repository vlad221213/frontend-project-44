import readlineSync from 'readline-sync';

const app = (question, expectAnswer, name, howMuchRounds = 3) => {
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
