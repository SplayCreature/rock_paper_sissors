// X Create an array for rock paper scissors 
// X Create a function for the computer to make a choice 
// X Create a function for the player to make a choice 
// X Write a function that compares choices 
// X Return a string to prompt win or loss 
// X Make selection prompt case insensitive 
// X Write a function that allows for 5 round game 

let i = 1
const choice = ['rock', 'paper', 'scissors'];

while (i < 5) {
    console.log(`Round ${i}`)
    i++;
    game();
function game(){ 
let playerGuess = prompt("Rock, Paper, or Scissors?");
let playerSelection = playerGuess.toLowerCase();

    function answerCheck(){
        if(choice.includes(playerSelection)) {
            console.log(`You chose ${playerSelection}`)
        } 
           else{ 
            return console.log("Answer invalid, try again.");
            }
        }
    answerCheck();

    getComputerChoice();
    function getComputerChoice() {
        const randNum = Math.floor(Math.random() * 3) + 1;
            
        switch(randNum) {
            case 1:
                computerSelection = "rock";
                break;
            case 2:
                computerSelection = "paper";
                break;    
            case 3:
                computerSelection = "scissors";
                break;     
        }
    }

    playRound(playerSelection, computerSelection); 
    function playRound(playerSelection, computerSelection) {
        if(playerSelection == computerSelection){
            return console.log("Draw!");
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
    }
    if(i === 5) break;
}

    game();









