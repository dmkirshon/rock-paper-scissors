/*  
    This is the javascript file for the Rock Paper Scissors Console Game.
*/

// initilize player selection and computer selection and gameStatus
let playerSelection;
let computerSelection;
let gameStatus;

// computerPlay player will play against a computer that will randomly return either rock, paper, scissors
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

// create a game running through playRound 5 times, keeps score and reports a winner
