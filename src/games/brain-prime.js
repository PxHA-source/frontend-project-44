/* eslint-disable import/extensions */
import randomNumber from '../helper.js';
import { cycle } from '../cli.js';

const descripton = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const divider = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

function simple() {
  const n = randomNumber(2, 100);
  const correctAnswer = divider(n) ? 'yes' : 'no';
  return [n, correctAnswer];
}

const brainPrime = () => {
  cycle(descripton, simple);
};

export default brainPrime;
