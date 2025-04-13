/* eslint-disable import/extensions */
import cycle from '../index.js';
import randomNumber from '../helper.js';

const signs = ['+', '-', '*'];
const descripton = 'What is the result of the expression?';

const calcGame = () => {
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

  const question = `${n} ${j} ${g}`;
  return [question, correctAnswer];
};

const calc = () => {
  cycle(descripton, calcGame);
};

export default calc;
