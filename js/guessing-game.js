// create a vairable to store the random number

let winningNum = 0;

// create an array to store the guesses

let guess = [];

// create variable that counts the number of guesses

let guessAttemped = 0;

// make a function or variable that keeps the value that is guessed and stores it in html.

function guessArray() {
  boxvalue = document.getElementById("guessField").value;
  guess.push(boxvalue)
  console.log("input added to array:", guess)
  
  let pastGuess = '';
  
  let i = 0;
  while (i < guess.length) {
  console.log("array2string:", guess[i]) 
  pastGuess += [guess[i]] + ', ';
  document.getElementById("previousGuess").innerHTML = pastGuess;
  i++;  
  }

  return false;
}


// make a random number generator using Math.random and use Math.floor to get rid of decimal.

let randomNum = Math.floor(Math.random() * 100 + 1);
console.log("winning number is:", randomNum)
winningNum = randomNum

// function to check if the guess input is correct, high or low.
// try to make a hint that gets you close to the winning number

function checkGuess() {
  let userGuess = guessField.value;
  console.log('number guessed:',userGuess)
  if (userGuess == randomNum) {
    currentGuess.textContent = `Winner! Took you ${guessAttemped} guesses!`
  }else if (userGuess > randomNum) {
    currentGuess.textContent = `Guess lower!`
    guessAttemped++;
  }else if (userGuess < randomNum) {
    currentGuess.textContent = `Guess higher!`
    guessAttemped++;
  } 
}
submitguess.addEventListener('click', checkGuess)

// create a function that gets the difference to getting close to the winning number
function difference() {
  let userGuess = guessField.value;
  let diff = Math.abs(userGuess-randomNum);
  console.log('diff is:', diff)
  if (diff < 10){
    temp.textContent = `You're burning up!`;
    document.body.style.backgroundColor = "#D95050";
  }else if(diff < 25){
    temp.textContent = `You're getting warmer.`;
    document.body.style.backgroundColor = "#EC8844";
  }else if(diff < 50){
    temp.textContent = `You're a bit chilly.`;
    document.body.style.backgroundColor = "#7ECBE6";
  }else{
    temp.textContent = `You're ice cold!`
    document.body.style.backgroundColor = "#5B8DF0";
  }
}

submitguess.addEventListener('click', difference)

// create a function that ends the game at x number of guesses

function gameOver() {
  if (guessAttemped == 5) {
    confirm(`Gameover! Winning number was ${winningNum}`);
    window.location.reload()
    // currentGuess.textContent = `Gameover! Winning number was ${winningNum}`
  }
}

submitguess.addEventListener('click', gameOver)

// make a function or DOM to get the play again button to work

document.getElementById("reset").addEventListener('click', function(){
  location.reload();
  return false;
});

// showing value on html
// document.getElementById("winningNumber").innerHTML = winningNum;

// document.getElementById("previousGuess").innerHTML = 
