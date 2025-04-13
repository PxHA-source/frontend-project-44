export default function isRandomNumber(min = 0, max = 100) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
