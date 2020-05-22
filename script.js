let randomNumber = getRandomNumber();
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const guessesLeft = document.querySelector(".guessesLeft");
let guessCount = 1;
let resetButton;
let maxGuess = 10;
let previousGuesses = [];

function checkGuess() {
  let userGuess = Number(guessField.value);
  let existingNumbers;
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  if (previousGuesses.includes(userGuess)) {
    console.log("You already guessed that");
  }
  guesses.textContent += userGuess + " ";
  previousGuesses.push(userGuess);
  console.log(previousGuesses);

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === maxGuess) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }
  let currentNumberLeft = maxGuess - guessCount;
  guessesLeft.textContent = "You have " + currentNumberLeft + " guesses left";
  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = getRandomNumber();
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
