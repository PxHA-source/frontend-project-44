import readlineSync from 'readline-sync';
import randomNumber from '../helper.js';

const signs = ['+', '-', '*'];

const calc = () => {
    let i = 0;
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}`);
    console.log('What is the result of the expression?');
    while (i < 3) {
    let n = randomNumber(1, 10);
    let g = randomNumber(1, 10);
    const j = signs[randomNumber(0, 2)];
    let correctAnswer 
    if (j === '+') {
      correctAnswer = n + g;
    } else if (j === '-') {
        correctAnswer = n - g;
    } else {
        correctAnswer = n * g;
    }

    console.log(`Question: ${n} ${j} ${g}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.toString()) {
        console.log("Correct!");
        i++;
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \n Let's try again, ${name}`);
        return;
    }
    }
    console.log(`Congratulations, ${name}`);
}

export default calc;