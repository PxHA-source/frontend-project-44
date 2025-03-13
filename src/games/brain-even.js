const parity = () => {
  let i = 0;
  console.log("Welcome to the Brain Games!");
  console.log("May I have your name?");
  const name = readlineSync.question("May I have your name?: "); //тут имя получаю с помощья redline-sync, redline-sync нужно сделать(установить)
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (i <= 3) {
    let n; // генеративное число нужна функция
    let correctAnswer = n % 2 === 0 ? "yes" : "no";
    const answer = readlineSync.question("Question: "); // сравнивать с ответом пользователя
    if (answer === correctAnswer) {
      console.log("Correct!");
      i++;
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \n Let's try again, ${name}`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};
