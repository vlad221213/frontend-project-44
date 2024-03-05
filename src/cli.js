/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import readlineSync from 'readline-sync';
import _ from 'lodash';

const askNameAndGreet = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${_.capitalize(name)}!`);
};
export default askNameAndGreet;
