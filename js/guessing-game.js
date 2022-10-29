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

let y = Math.floor(Math.random() * 100 + 1);
console.log("winning number is:", y)



// make a function or variable that keeps the value that is guessed and stores it in html.

let guess = 1;

function checkGuess() {
  let userGuess = guessField.value;
  if (userGuess === y) {
    previousGuess.textContent = "You got it right!"
  }else if (userGuess > y) {
    previousGuess.textContent = "Your guess was " + userGuess + ". That's too high. Try again!"
  }else if (userGuess < y) {
    previousGuess.textContent = "Your guess was " + userGuess + ". That's too low. Try again!"
  }
}
submitguess.addEventListener('click', checkGuess)

// document.getElementById("submitguess").onclick = function () {
//   let x = document.getElementById("guessField").value;

//   if(y == x) {
//     alert("you got the right guess " + guess)
//   }
//   else if(x > y) {
//     guess++;
//     alert("go smaller!")
//   }
//   else {
//     guess++;
//     alert("go higher!")
//   }
// }

// let guessInput = document.querySelector('.guessInput');
// let guessSubmit = document.querySelector('.guessSubmit');

// function userGuess(event) {
//     event.preventDefault();
//     let data = document.getElementById("data");
//     console.log(data.value);
// }




// showing value on html
document.getElementById("winningNumber").innerHTML = y;

