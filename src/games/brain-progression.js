/* eslint-disable import/extensions */
import randomNumber from '../helper.js';
import cycle from '../index.js';

const descripton = 'What number is missing in the progression?';

const generate = () => {
  // Генерируем случайную длину прогрессии от 5 до 10
  const length = randomNumber(5, 10);

  // Генерируем первый элемент (от 1 до 100) и разность (от 1 до 10)
  const a1 = randomNumber(1, 100);
  const d = randomNumber(1, 10);

  // Создаем массив прогрессии
  // eslint-disable-next-line no-shadow
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(a1 + i * d);
  }
  return progression;
};

function progression() {
  const n = generate();
  const randomIndex = randomNumber(0, n.length - 1);
  const correctAnswer = n[randomIndex];
  n[randomIndex] = '..';
  return [n.join(' '), correctAnswer];
}

const brainProggression = () => {
  cycle(descripton, progression);
};

export default brainProggression;
