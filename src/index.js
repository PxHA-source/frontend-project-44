/* eslint-disable no-console */

/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { greetUser } from './cli.js';

export const checkAnswer = (answer, correctAnswer, name) => {
  if (answer === correctAnswer.toString()) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \n Let's try again, ${name}`,
  );
  return false;
};

export const congratulations = (name) => {
  console.log(`Congratulations, ${name}`);
};

const cycle = (description, cb) => {
  let i = 0;
  const ROUNDS_COUNT = 3;
  const name = greetUser();
  console.log(description);

  while (i < ROUNDS_COUNT) {
    const [question, correctAnswer] = cb();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your Answer: ').toLowerCase();

    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${name}`,
      );
      return false;
    }
  }

  console.log(`Congratulations, ${name}`);
  return true;
};

export default cycle;
