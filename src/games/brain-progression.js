/* eslint-disable import/extensions */
import getRandomNumber from '../helper.js';
import cycle from '../index.js';

const descripton = 'What number is missing in the progression?';

const generateProgression = () => {
  const randomLength = getRandomNumber(5, 10);
  const startFirstElement = getRandomNumber(1, 100);
  const difference = getRandomNumber(1, 10);

  const progression = [];
  for (let i = 0; i < randomLength; i += 1) {
    progression.push(startFirstElement + i * difference);
  }
  return progression;
};

function getProgressionRound() {
  const number = generateProgression();
  const randomIndex = getRandomNumber(0, number.length - 1);
  const correctAnswer = number[randomIndex];
  number[randomIndex] = '..';
  return [number.join(' '), correctAnswer];
}

const runProgressionGame = () => {
  cycle(descripton, getProgressionRound);
};

export default runProgressionGame;
