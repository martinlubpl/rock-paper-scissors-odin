function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
  return prompt("Choose: rock, scissors, paper?", "rock");
}

const choices = ["Rock", "Scissors", "Paper"];

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  if (playerSelection == computerSelection) {
    return "tie";
  } else if (playerSelection == "Rock") {
    if (computerSelection == "Scissors") {
      return "you";
    } else {
      return "comp";
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection == "Paper") {
      return "you";
    } else {
      return "comp";
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      return "you";
    } else {
      return "comp";
    }
  }
}

const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const final = document.querySelector("#final");
let playerPoints = 0;
let computerPoints = 0;

function oneGame(e) {
  console.log(e.target.id);
  roundResult = playRound(e.target.id, getComputerChoice());
  if (roundResult === "tie") {
    result.innerText = "It was a tie";
  } else if (roundResult === "you") {
    result.innerText = "You won this round";
    playerPoints++;
    displayPoints();
  } else if (roundResult === "comp") {
    result.innerText = "Computer wins";
    computerPoints++;
    displayPoints();
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", oneGame);
});

function displayPoints() {
  final.innerText = `YOU: ${playerPoints} .:. COMPUTER: ${computerPoints}`;
  if (playerPoints == 5 || computerPoints == 5) {
    removeListeners();
    result.innerText = "GAME OVER!!!";
  }
}

function removeListeners() {
  console.log("rmv list");
  buttons.forEach((btn) => {
    btn.removeEventListener("click", oneGame);
  });
}
