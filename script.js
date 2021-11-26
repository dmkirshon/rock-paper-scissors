/**
 *   This is the javascript file for the Rock Paper Scissors Console Game.
*/

/** computerPlay returns a random choice of rock, paper or scissors*/ 
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

/** playRound function which will play through one round, will take in 
* playerSelection and computerSelection, return string declaring winner
*/
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

    return roundResult;
}

function getRoundPhrase(result, playerSelection, computerSelection) {
    let roundPhrase;

    switch (result) {
        case 1:
            roundPhrase = `You win: ${playerSelection} beats ${computerSelection}!`;
            break;
        case 0:
            roundPhrase = `You tied! Both of you picked ${playerSelection}!`;
            break;
        case -1:
            roundPhrase = `You lose: ${computerSelection} beats ${playerSelection}!`;
    }

    return roundPhrase;
}

/**
 * Create a game running through playRound 5 times
 * Keeps score and reports a winner
 */
function playGame() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let roundResult = 0;
        let roundPhrase;

        while (roundResult == 0 && (playerScore < 3 && computerScore > -3)) {
            const playerSelection = prompt(`Round ${i} Choose: rock, paper,` +
            ` or scissors!`,"rock").toLowerCase();
            const computerSelection = computerPlay();

            // play a round of rock paper scissors and display winner
            roundResult = playRound(playerSelection, computerSelection);
            roundPhrase = getRoundPhrase(roundResult, playerSelection, 
                computerSelection);
            console.log(`Round ${i}: ` + roundPhrase);
            
            // Determines winner of the round
            if (roundResult === 1) {
                playerScore += roundResult;
            } else {
                computerScore += roundResult;
            }
        }
    }

    // Determines winner of the game
    if (playerScore > 2) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game!");
    }



}


playGame();