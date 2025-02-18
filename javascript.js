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
    winner.textContent = '';
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        winner.textContent = 'It is a tie';
        return 'It is a tie';

    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            updateScore();
            winner.textContent = 'Computer wins';
            return 'Computer wins';
        } else {
            humanScore++;
            updateScore();
            winner.textContent = 'Human wins';
            return 'Human wins';
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            updateScore();
            winner.textContent = 'Computer wins';
            return 'Computer wins';
        } else {
            humanScore++;
            updateScore();
            winner.textContent = 'Human wins';
            return 'Human wins';
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            updateScore();
            winner.textContent = 'Computer wins';
            return 'Computer wins';
        } else {
            humanScore++;
            updateScore();
            winner.textContent = 'Human wins';
            return 'Human wins';
        }
    }
}

function updateScore() {
    content.textContent = `The score is: Human ${humanScore} - Computer ${computerScore}`;
}

let humanScore = 0;
let computerScore = 0;
let roundResult = '';


var container = document.getElementById('container');
const content = document.createElement("div");
content.classList.add("content");
content.textContent = `The score is: Human ${humanScore} - Computer ${computerScore}`;

const winner = document.createElement("div");
winner.classList.add("winner");
winner.textContent = ``;


container.appendChild(content); 
container.appendChild(winner);

if (humanScore >= 5) {
    winner.textContent = 'Human wins the game';
} else if (computerScore >= 5) {
    winner.textContent = 'Computer wins the game';
}
