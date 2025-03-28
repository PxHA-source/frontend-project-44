/* eslint-disable import/extensions */
import randomNumber from '../helper.js';
import { cycle } from '../cli.js';

const descripton = 'Answer "yes" if the number is even, otherwise answer "no".';

const parityGame = () => {
  const n = randomNumber();
  const correctAnswer = n % 2 === 0 ? 'yes' : 'no';
  return [n, correctAnswer];
};

const parity = () => {
  cycle(descripton, parityGame);
};

export default parity;
