/*  
    This is the javascript file for the Rock Paper Scissors Console Game.
*/

// initilize player selection and computer selection and gameStatus
let playerSelection;
let computerSelection;

// computerPlay returns a random choice of rock, paper or scissors
function computerPlay() {
    const randomValue = Math.floor(Math.random() * 3) + 1;

    if (randomValue === 1) {
        return "rock";
    } else if (randomValue === 2) {
        return "paper";
    } else if (randomValue === 3) {
        return "scissors"
    }
}

// playRound function which will play through one round, will take in playerSelection and computerSelection, return string declaring winner

function playRound(playerSelection, computerSelection) {
    const winningPhrase = `You win: ${playerSelection} beats ${computerSelection}!`;
    const losingPhrase = `You lose: ${computerSelection} beats ${playerSelection}!`;
    const tiePhrase = `You tied! Both of you picked ${playerSelection}!`

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        return winningPhrase;
    } else if (playerSelection === computerSelection) {
        return tiePhrase;
    } else {
        return losingPhrase;
    }
}

// create a game running through playRound 5 times, keeps score and reports a winner

function game() {
    let gameScore = 0;
    let roundStatus;

    for(let i = 1; i <= 5; i++) {
        do {
        playerSelection = prompt(`Round ${i} Choose: rock, paper, or scissors!`,"rock").toLowerCase();
        computerSelection = computerPlay();

        roundStatus = playRound(playerSelection, computerSelection);
        const roundStatusResult = roundStatus.includes("win");
        console.log(`Round ${i}: ` + roundStatus);
        gameScore += roundStatusResult;
        }
        while(roundStatus.includes("tie"));
    }
    if (gameScore > 2) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game!");
    }
}

game();