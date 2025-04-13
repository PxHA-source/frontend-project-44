export default function getRandomNumber(min = 0, max = 100) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

export const isEven = (number) => number % 2 === 0;
