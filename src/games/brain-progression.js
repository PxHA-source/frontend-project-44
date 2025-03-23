/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import randomNumber from '../helper.js';
import { greetUser, checkAnswer, congratulations } from '../cli.js';

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

/* eslint-disable no-console */
export default function progression() {
  let i = 0;
  const name = greetUser();
  console.log('What number is missing in the progression?');

  while (i < 3) {
    const n = generate();
    const randomIndex = randomNumber(0, n.length - 1);
    const correctAnswer = n[randomIndex];
    n[randomIndex] = '..';
    console.log(`Question: ${n.join(' ')}`);
    const answer = readlineSync.question('Your Answer: ').toLowerCase();
    if (checkAnswer(answer, correctAnswer, name)) {
      i += 1;
    } else {
      return;
    }
  }
  congratulations(name);
}
