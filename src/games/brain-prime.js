/* eslint-disable import/extensions */
import getRandomNumber from '../helper.js';
import cycle from '../index.js';

const descripton = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

function getPrimeAnswer() {
  const number = getRandomNumber(2, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
}

const runPrimeGame = () => {
  cycle(descripton, getPrimeAnswer);
};

export default runPrimeGame;
