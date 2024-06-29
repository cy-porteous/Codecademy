let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
   return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDiff = Math.abs (targetGuess - humanGuess);
    const computerDiff = Math.abs (targetGuess - computerGuess);
    if (humanDiff <= computerDiff) {
      return true
    }
    else {
      return false
    }
};

updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1
  } else if (winner === 'computer') {
    computerScore += 1 }
};

const advanceRound = () => {
  currentRoundNumber += 1
}
