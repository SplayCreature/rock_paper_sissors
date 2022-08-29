// X Make buttons for player to click
// X on click, the buttons call playRound
// X make the buttons tied to a choice
// X display what player chooses
// X display what computer chooses
// X declare win or loss
// X display score
// X declare overall win or loss



const getPScore = document.getElementById('p-score');
const getCScore = document.getElementById('c-score');
const finalOutcome = document.getElementById('final');

const btn = document.querySelectorAll('button')

btn.forEach(btn => btn.addEventListener('click', e => {

    function game() {
        if(getPScore.textContent === '5') {
            finalOutcome.textContent = 'YOU WIN!';
            btn.removeEventListener('click', e);
            return;
        }
        else if(getCScore.textContent === '5') {
            finalOutcome.textContent = 'YOU LOSE!';
            btn.removeEventListener('click', e);
            return;
        }
        else {
            playRound();
        }

function playRound(playerSelection, computerSelection) {
    let pScore = parseInt(getPScore.textContent, 10);
    let cScore = parseInt(getCScore.textContent, 10);
    let player = document.getElementById('player');
    let computer = document.getElementById('computer');
    let outcome = document.getElementById('outcome');


    function getOutcome(playerSelection, computerSelection) {

        function getPlayerChoice() {
            const rock = document.getElementById('rock');
            const paper = document.getElementById('paper');
            const scissors = document.getElementById('scissors');
            if(btn == rock) {
                playerSelection = 'rock';
                return player.textContent = 'You Chose Rock.';
            }
            else if(btn == paper) {
                playerSelection = 'paper';
                return player.textContent = 'You Chose Paper.';
            }
            else if (btn == scissors) {
                playerSelection = 'scissors';
                return player.textContent = 'You Chose Scissors.';
            }     
        }
        getPlayerChoice(playerSelection);

        function getComputerChoice() {
            const randNum = Math.floor(Math.random() * 3) + 1;
                    
            switch(randNum) {
                case 1:
                    computerSelection = "rock";
                    computer.textContent = 'Computer Chose Rock.';
                    break;
                case 2:
                    computerSelection = "paper";
                    computer.textContent = 'Computer Chose Paper.';                    
                    break;    
                case 3:
                    computerSelection = "scissors";
                    computer.textContent = 'Computer Chose Scissors.';
                    break;     
            }
        }
        getComputerChoice();

            if(playerSelection === computerSelection){
                return outcome.textContent = "Draw!";
            }
            else if(computerSelection == "rock"){
                return outcome.textContent = (playerSelection == "paper") ? "You Win!" : "You Lose!"
            }
            else if(computerSelection == "paper"){
                return outcome.textContent = (playerSelection == "scissors") ? "You Win!" : "You Lose!"
            }
            else if(computerSelection == "scissors"){
                return outcome.textContent = (playerSelection == "rock") ? "You Win!" : "You Lose!"
            }


        } 
        function score() {
            if(outcome.textContent == 'Draw!') {
                return;
            }
            
            else if(outcome.textContent == 'You Win!') {
                let newPScore = +pScore + 1;
                return getPScore.textContent = newPScore;
            }
            else {
                let newCScore = +cScore + 1;
                return getCScore.textContent = newCScore;
            }
        }
    getOutcome();
    score();
}
}
game();
}));












