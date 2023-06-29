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

playerPoints = 0
computerPoints = 0
const container = document.querySelector('.container')
const div = document.createElement('div')

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice()
        let playerChoice = `${button.id}`
        result = playRound(playerChoice, computerChoice)
        div.classList.add('content')
        if (result == 1) {
            playerPoints++;
            div.textContent = `You win! ${playerChoice} beats ${computerChoice}. Player: ${playerPoints}. Computer: ${computerPoints}`;
            checkWinner()
        }
        else if (result == 2) {
            computerPoints++;
            div.textContent = `You lose! ${computerChoice} beats ${playerChoice}. Player: ${playerPoints}. Computer: ${computerPoints}`;
            checkWinner()
        }
        else {
            div.textContent = "It is a draw!";
        }
        container.appendChild(div)
    })
})

function checkWinner() {
    const winnerDiv = document.createElement('div')
    if (playerPoints == 5) {
        winnerDiv.textContent = "You are the winner!"
    }
    else if (computerPoints == 5) {
        winnerDiv.textContent = "The computer wins!"
    }

    container.appendChild(winnerDiv)
}
