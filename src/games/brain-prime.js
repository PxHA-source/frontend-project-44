/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import randomNumber from '../helper.js';
import { greetUser, checkAnswer, congratulations } from '../cli.js';

/* eslint-disable no-console */
const divider = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export default function simple() {
  let i = 0;
  const name = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (i < 3) {
    const n = randomNumber();
    const correctAnswer = divider(n) ? 'yes' : 'no';
    console.log(`Question: ${n}`);
    const answer = readlineSync.question('Your Answer: ').toLowerCase();
    if (checkAnswer(answer, correctAnswer, name)) {
      i += 1;
    } else {
      return;
    }
  }
  congratulations(name);
}
