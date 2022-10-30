let button = document.getElementById("button");
let output = document.getElementById("outputtext");
// create a vairable to store the random number

let winningNum = 0;

// create an array to store the guesses

let guess = document.getElementById("userguess");
console.log('guess:', guess)


// make a random number generator using Math.random and use Math.floor to get rid of decimal

let randomNum = Math.floor(Math.random() * 100 + 1);
console.log("winning number is:", randomNum)
winningNum = randomNum



// make a function or variable that keeps the value that is guessed and stores it in html.

button.addEventListener('click', function() {
    let input = document.getElementById("userguess").value;
    if (input == winningNum) {
        output.innerHTML = `Winner!`
    } else if (input < winningNum) {
        output.innerHTML = `You guessed low!`
    } else if (input > winningNum) {
        output.innerHTML = `You guessed high!`
    }
});






// showing value on html
document.getElementById("winningNumber").innerHTML = winningNum;
document.getElementById("currentGuess").innerHTML = guess;

