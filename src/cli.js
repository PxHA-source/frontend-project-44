import readlineSync from 'readline-sync';

/* eslint-disable no-console */
export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

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

export const cycle = (descripton, cb) => {
  let i = 0;
  const name = greetUser();
  console.log(descripton);
  while (i < 3) {
    const result = cb();
    console.log(`Question: ${result[0]}`);
    const answer = readlineSync.question('Your Answer: ').toLowerCase();

    if (checkAnswer(answer, result[1], name)) {
      i += 1;
    } else {
      return;
    }
  }
  congratulations(name);
};
