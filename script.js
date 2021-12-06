/**
 *   This is the javascript file for the Rock Paper Scissors Console Game.
*/
const buttonChoices = document.querySelectorAll('.btn');
const resultCommentaryPara = document.querySelector('.results-commentary');
const resultScorePara = document.querySelector('.results-score');
const buttonReset = document.querySelector('.btn-reset');
const disableChoices = (bool) => buttonChoices.forEach(btn => {btn.disabled = bool;})


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
/** Player clicks a button and the function gets the value
 */
function getPlayerSelection(choice) {

    const playerSelection = choice.toLowerCase();
    if (playerSelection === "rock" ||
        playerSelection === "paper" ||
        playerSelection === "scissors") {
            return playerSelection;
        } 
}

/** playRound function which will play through one round, will take in 
* playerSelection and computerSelection, return result
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

/** Return a phrase of win, tie, or loss based on param result*/
function getRoundPhrase(result, playerSelection, computerSelection) {
    let roundPhrase;
    playerSelection = playerSelection[0].toUpperCase() + 
    playerSelection.substring(1);

    omputerSelection = computerSelection[0].toUpperCase() + 
    computerSelection.substring(1);

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
 * Score the RPS game based on playes and computers score
 * Output a message saying who won
 */
function scoreGame(playerScore, computerScore){
    if(playerScore === 5) {
        resultCommentaryPara.textContent = "You won the game!";
        disableChoices(true);
        buttonReset.hidden = false;
    } else if(computerScore === 5){
        resultCommentaryPara.textContent = "You lost the game!";
        disableChoices(true);
        buttonReset.hidden = false;
    }

}


/**
 * Reset the game as if they refreshed the page.
 */
function resetGame(){
    buttonReset.hidden = true;
    disableChoices(false);
    resultCommentaryPara.textContent = '';
    resultScorePara.textContent = '';
    playGame();
}


/**
 * Create a game running through playRound 5 times
 * Keeps score and reports a winner
 */
function playGame() {

    let playerScore = 0;
    let computerScore = 0;

    // play a Round of RPS when button is clicked
    buttonChoices.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const playerSelection = getPlayerSelection(e.target.textContent);
            const computerSelection = computerPlay();
            const roundResult = playRound(playerSelection, computerSelection);
            const roundPhrase = getRoundPhrase(roundResult, playerSelection, computerSelection);
            
            // Scores winner of the round
            if (roundResult === 1) {
                playerScore += roundResult;
            } else {
                computerScore -= roundResult;
            }

            resultCommentaryPara.textContent = roundPhrase;
            resultScorePara.textContent = `Score: Player ${playerScore} Computer ${computerScore}`;
            
            // 5 point rounds played
            if(playerScore === 5 || computerScore === 5) {
                scoreGame(playerScore, computerScore);
            }
            

        });
    });

    buttonReset.addEventListener('click', resetGame);
}


playGame();