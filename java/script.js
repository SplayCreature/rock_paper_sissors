// X Create an array for rock paper scissors 
// X Create a function for the computer to make a choice 
// X Create a function for the player to make a choice 
// X Write a function that compares choices 
// X Return a string to prompt win or loss 
// Make selection prompt case insensitive 
// Write a function that allows for 5 round game 

const choice = ['rock', 'paper', 'scissors'];
let random = choice[Math.floor(Math.random() * choice.length)];
let computerSelection = random;
let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();


function playRound(playerSelection, computerSelection) {
    if(playerSelection != choice){
        return console.log("Answer invalid, try again")
    }
    else if(playerSelection == computerSelection){
        return ("Draw!")
    }
    else if(computerSelection == "rock"){
        return console.log((playerSelection == "paper") ? "You Win!" : "You Lose!")
    }
    else if(computerSelection == "paper"){
        return console.log((playerSelection == "scissors") ? "You Win!" : "You Lose!")
    }
    else if(computerSelection == "scissors"){
        return console.log((playerSelection == "rock") ? "You Win!" : "You Lose!")
    }
}

playRound(playerSelection, computerSelection);



