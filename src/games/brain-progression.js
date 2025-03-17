import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import randomNumber from '../helper.js';

/* eslint-disable no-console */
export default function progression = () => {
  let i = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log('What number is missing in the progression?');
  while (i < 3) {
    const n = randomNumber(5, 10);
    const correctAnswer = ; 
    console.log(`Question: `); // здесь надо рандомное число постоянно плюсовать 
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
