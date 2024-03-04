import readlineSync from 'readline-sync';
import _ from 'lodash';
export const askNameAndGreet = () => {
    const name = readlineSync.question('May I have your name?');
    console.log (`Hello, ${_.capitalize(name)}!`);
}