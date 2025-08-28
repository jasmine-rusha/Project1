// Ultra-simple number guessing game
const guessInput = document.getElementById("guess");
const checkBtn = document.getElementById("check-btn");
const resetBtn = document.getElementById("reset-btn");
const message = document.getElementById("message");
const triesDisplay = document.getElementById("tries");
const guessList = document.getElementById("guess-list");

let secretNumber, triesLeft;

// Start game
function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  triesLeft = 10;
  message.textContent = "";
  triesDisplay.textContent = triesLeft;
  guessList.innerHTML = "";
  guessInput.value = "";
  guessInput.disabled = false;
  checkBtn.disabled = false;
}

// Check guess
function checkGuess() {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Enter a number between 1 and 100!";
    return;
  }

  triesLeft--;
  triesDisplay.textContent = triesLeft;

  const li = document.createElement("li");
  li.textContent = guess;
  guessList.appendChild(li);

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    endGame();
  } else if (triesLeft === 0) {
    message.textContent = `❌ Out of tries! The number was ${secretNumber}.`;
    endGame();
  } else if (guess < secretNumber) {
    message.textContent = "Too low!";
  } else {
    message.textContent = "Too high!";
  }

  guessInput.value = "";
}

function endGame() {
  guessInput.disabled = true;
  checkBtn.disabled = true;
}

// Events
checkBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", startGame);

// Start on load
startGame();
