function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[(Math.floor(Math.random() * choices.length))] // randomly choose an integer from 0 to 2 as the index
}


function playRound(playerSelection, computerSelection) {
    if ((computerSelection == 'rock' && playerSelection == 'paper') || (computerSelection == 'paper' && playerSelection == 'scissors') || (computerSelection == 'scissors' && playerSelection == 'rock')) {
        return(1) // player wins
    }
    else if ((computerSelection == 'paper' && playerSelection == 'rock') || (computerSelection == 'scissors' && playerSelection == 'paper') || (computerSelection == 'rock' && playerSelection == 'scissors')) {
        return(2) // player loses
    }
    else {
        return(0) // draw
    }
}

function game() {
    playerPoints = 0;
    computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice()
        let playerChoice = (prompt("Input rock, paper or scissors.")).toLowerCase()
        result = playRound(playerChoice, computerChoice)
        if (result == 1) {
            playerPoints++;
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        }
        else if (result == 2) {
            computerPoints++;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        }
        else {
            console.log("It is a draw!");
        }
    }
    if (playerPoints > computerPoints) {
        console.log("Congrats! You won the game.");
    }
    else if (computerPoints > playerPoints) {
        console.log("You lost the game.");
    }
    else {
        console.log("It is a tie.");
    }
}

game()