function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function getHumanChoice() {
    const humanChoice = prompt('Please enter your choice');
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    } else {
        return 'Invalid choice';
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return 'It is a tie';

    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            return 'Computer wins';
        } else {
            humanScore++;
            return 'Human wins';
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            return 'Computer wins';
        } else {
            humanScore++;
            return 'Human wins';
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            return 'Computer wins';
        } else {
            humanScore++;
            return 'Human wins';
        }
    }
}