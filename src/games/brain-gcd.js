/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import randomNumber from '../helper.js';

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
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log('Find the greatest common divisor of given numbers.');
  while (i < 3) {
    const num1 = randomNumber();
    const num2 = randomNumber();
    const correctAnswer = String(euclid(num1, num2));
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your Answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \n Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
}
