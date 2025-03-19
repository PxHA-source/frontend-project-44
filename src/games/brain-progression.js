import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import randomNumber from '../helper.js';

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
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log('What number is missing in the progression?');

  while (i < 3) {
    const n = generate();
    const randomIndex = randomNumber(0, n.length - 1);
    const correctAnswer = n[randomIndex];
    n[randomIndex] = '..';
    console.log(`Question: ${n.join(' ')}`);
    const answer = readlineSync.question('Your Answer: ');
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \n Let's try again, ${name}`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
}
