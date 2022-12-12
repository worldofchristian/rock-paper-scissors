const choices = ["rock", "paper", "scissors"];
// array of choices

let playerScore = 0
let computerScore = 0
// these will increase by 1 with each win

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
// calls the functions that return input variables
// calls the function that plays the game, with input variables as parameters

function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    // random number between 0 and 1
    // multiplied by the number of items in the array
    // then rounded down to he nearest integer
    return choice;
    // random number between 1 and 3 corresponds to one of the 3 items in array
    // returns random selection from array
}

function getPlayerChoice() {
}

function checkWinrar(playerSelection, computerSelection) {
    // determines who wins the game based on the rules of rock paper scissors

    if(playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player";
        playerScore += 1
        // player gets 1 point
    }
    else {
        return "Computer";
        computerScore += 1
        // computer gets 1 point
    }
    // returns the winner
}

function playRound(playerSelection, computerSelection) {
    // takes in the input variables and the result from checkWinrar function 
    // writes a message to console indicating who won

    const result = checkWinrar(playerSelection,computerSelection);
    if (result == "Tie") {
        return "Tie"
    }
    else if (result == "Player") {
        return `Winrar! ${playerSelection} beats ${computerSelection}`

    }
    else {
        return `You lost LOL ${computerSelection} beats ${computerSelection}`
    }
}