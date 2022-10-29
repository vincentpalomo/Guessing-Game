// create a vairable to store the random number
let winningNum = 0;

// create an array to store the guesses

let guess = [];

// make a function or variable that keeps the value that is guessed and stores it in html.

function guessArray() {
  boxvalue = document.getElementById("guessField").value;
  guess.push(boxvalue)
  console.log("input added to array:", guess)
  return false;
}

// make a random number generator using Math.random and use Math.floor to get rid of decimal.

let randomNum = Math.floor(Math.random() * 100 + 1);
console.log("winning number is:", randomNum)
winningNum = randomNum

// function to check if the guess input is correct, high or low.

function checkGuess() {
  let userGuess = guessField.value;
  console.log('number guessed:',userGuess)
  // guess.push(userGuess)
  if (userGuess == randomNum) {
    currentGuess.textContent = "You got it right!"
  }else if (userGuess > randomNum) {
    currentGuess.textContent = `${userGuess} is high, try again!`
  }else if (userGuess < randomNum) {
    currentGuess.textContent = `${userGuess} is low, try again!`
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




// showing value on html
document.getElementById("winningNumber").innerHTML = winningNum;

