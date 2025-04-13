/* eslint-disable import/extensions */
import cycle from '../index.js';
import getRandomNumber from '../helper.js';

const signs = ['+', '-', '*'];
const descripton = 'What is the result of the expression?';

const getCalcQuestion = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const sign = signs[getRandomNumber(0, 2)];
  let correctAnswer;

  switch (sign) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      break;
  }

  const question = `${num1} ${sign} ${num2}`;
  return [question, correctAnswer];
};

const runCalcGame = () => {
  cycle(descripton, getCalcQuestion);
};

export default runCalcGame;
