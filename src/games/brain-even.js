/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import randomNumber from '../helper.js';
import { greetUser, checkAnswer, congratulations } from '../cli.js';

/* eslint-disable no-console */
const parity = () => {
  let i = 0;
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (i < 3) {
    const n = randomNumber();
    const correctAnswer = n % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${n}`);
    const answer = readlineSync.question('Your Answer: ').toLowerCase();

    if (checkAnswer(answer, correctAnswer, name)) {
      i += 1;
    } else {
      return;
    }
  }
  congratulations(name);
};

export default parity;
