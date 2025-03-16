/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import randomNumber from '../helper.js';

export default function generalDivider() {
  let i = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log('Find the greatest common divisor of given numbers.');
  while (i < 3) {
    const g = randomNumber();
    const j = randomNumber();
    console.log(`Question: ${g} ${j}`);
    if (g / i && j / i) { 
      i += 1;
    }
  }
}
