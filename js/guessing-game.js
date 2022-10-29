/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

// create a vairable to store the random number
let winningNum = 0;

// create an array to store the guesses

let guesses = [];


// make a random number generator using Math.random and use Math.floor to get rid of decimal

let randomNumber = function () {
    console.log(randomNumber);
    winningNum = Math.floor(Math.random() * 100 + 1)
}

// invoke random number generator
randomNumber()

// make a function or variable that keeps the value that is guessed and stores it in html.

// let guessInput = document.querySelector('.guessInput');
// let guessSubmit = document.querySelector('.guessSubmit');

function userGuess(event) {
    event.preventDefault();
    let data = document.getElementById("data");
    console.log(data.value);
}

let list = document.getElementById("previousGuess")

let array = guesses.length;

let text ="";
for (let i = 0; i < array; i++) {
  text += "" + guesses[i] + "";
}
text += "";

// showing value on html
document.getElementById("winningNumber").innerHTML = winningNum;

document.getElementById('previousGuess').innerHTML = text;