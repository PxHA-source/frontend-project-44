const calc = () => {
    let i = 0;
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name?: '); //тут имя получаю с помощья redline-sync, redline-sync нужно сделать(установить)
    console.log(`Hello, ${name}`);
    console.log('What is the result of the expression?');
    while (i <= 3) {
    let n  // генеративное число нужна функция
    console.log("Question:" )
    const answer = readlineSync.question('Your answer: ')// сравнивать с ответом пользователя
    if (answer === correctAnswer) {
        console.log("Correct!");
        i++;
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \n Let's try again, ${name}`);
        return;
    }
    }
    console.log(`Congratulations, ${name}`)
}