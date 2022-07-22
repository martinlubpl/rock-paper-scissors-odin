function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function getPlayerChoice() {
    return prompt("Choose: rock, scissors, paper?", "rock")
}

const choices = ['Rock', 'Scissors', 'Paper'];


const playerSelection = "rock";


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    } else if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            return "You win! Rock beats Scissors"
        } else {
            return "You lose! Paper beats Rock"
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            return "You win! Scissors beat Paper"
        } else {
            return "You lose! Rock beats Scissors"
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return "You win! Paper beats Rock"
        } else {
            return "You lose! Scissors beats Paper"
        }
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
        let slice = result.slice(0, 8);
        if (slice == "You win!") {
            playerPoints++;
        } else if (slice == "You lose") {
            computerPoints++;
        }
    }

    console.log(`Final result: You - ${playerPoints}, Computer - ${computerPoints}`)
}

game()