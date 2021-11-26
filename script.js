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
    let roundResult;

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        roundResult = 1;
    } else if (playerSelection === computerSelection) {
        roundResult = 0;
    } else {
        roundResult = -1;
    }

    return getRoundPhrase(roundResult, playerSelection, computerSelection);
}

function getRoundPhrase(result, playerSelection, computerSelection){
    let roundPhrase;

    switch (result){
        case "win":
            roundPhrase = `You win: ${playerSelection} beats ${computerSelection}!`;
            break;
        case "tie":
            roundPhrase = `You tied! Both of you picked ${playerSelection}!`;
            break;
        case "lose":
            roundPhrase = `You lose: ${computerSelection} beats ${playerSelection}!`;
    }
    
    return roundPhrase;
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