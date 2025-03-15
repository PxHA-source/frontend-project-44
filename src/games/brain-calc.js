import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import randomNumber from '../helper.js';

const signs = ['+', '-', '*'];

/* eslint-disable no-console */
const calc = () => {
  let i = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
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
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \n Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default calc;
