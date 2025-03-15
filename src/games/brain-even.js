import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import randomNumber from '../helper.js';

/* eslint-disable no-console */
const parity = () => {
  let i = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (i < 3) {
    const n = randomNumber();
    const correctAnswer = n % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${n}`);
    const answer = readlineSync.question('Your Answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \n Let's try again, ${name}`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default parity;
