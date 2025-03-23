/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import randomNumber from '../helper.js';
import { greetUser, checkAnswer, congratulations } from '../cli.js';

const signs = ['+', '-', '*'];

/* eslint-disable no-console */
const calc = () => {
  let i = 0;
  const name = greetUser();
  console.log('What is the result of the expression?');
  while (i < 3) {
    const n = randomNumber(1, 10);
    const g = randomNumber(1, 10);
    const j = signs[randomNumber(0, 2)];
    let correctAnswer;
    if (j === '+') {
      correctAnswer = n + g;
    } else if (j === '-') {
      correctAnswer = n - g;
    } else {
      correctAnswer = n * g;
    }

    console.log(`Question: ${n} ${j} ${g}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if (checkAnswer(answer, correctAnswer, name)) {
      i += 1;
    } else {
      return;
    }
  }
  congratulations(name);
};

export default calc;
