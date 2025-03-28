/* eslint-disable import/extensions */
import { cycle } from '../cli.js';
import randomNumber from '../helper.js';

const question = 'Find the greatest common divisor of given numbers.';

const euclid = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

function generalDivider() {
  const num1 = randomNumber(1, 50);
  const num2 = randomNumber(1, 50);
  const correctAnswer = String(euclid(num1, num2));
  const result = (`${num1} ${num2}`);
  return [result, correctAnswer];
}

const brainGCD = () => {
  cycle(question, generalDivider);
};

export default brainGCD;
