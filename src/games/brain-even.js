/* eslint-disable import/extensions */
import getRandomNumber, { isEven } from '../helper.js';
import cycle from '../index.js';

const descripton = 'Answer "yes" if the number is even, otherwise answer "no".';

const getIsEvenAnswer = () => {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const runEvenGame = () => {
  cycle(descripton, getIsEvenAnswer);
};

export default runEvenGame;
