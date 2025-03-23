/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import randomNumber from '../helper.js';
import { greetUser, checkAnswer, congratulations } from '../cli.js';

const euclid = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

export default function generalDivider() {
  let i = 0;
  const name = greetUser();
  console.log('Find the greatest common divisor of given numbers.');
  while (i < 3) {
    const num1 = randomNumber(1, 50);
    const num2 = randomNumber(1, 50);
    const correctAnswer = String(euclid(num1, num2));
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your Answer: ').toLowerCase();
    if (checkAnswer(answer, correctAnswer.toString(), name)) {
      i += 1;
    } else {
      return;
    }
  }
  congratulations(name);
}
