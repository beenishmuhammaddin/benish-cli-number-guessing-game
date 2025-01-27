#! /usr/bin/env node

import inquirer from "inquirer"

// 01 computer will generate a random num

// 02 user input for guessing number

//03 compare user input with computer generated num and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);

console.log(answers);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratualtions! you guessed right number.");
} else {
    console.log("You guessed wrong number.");
}

