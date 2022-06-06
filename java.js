console.log("Hello World")

let rock = 0;
let paper = 1; 
let scissors = 2;
let computerSelection = undefined;
let playerSelection = undefined;
let computerScore = 0;
let playerScore = 0;


function computerPlay() {
computerSelection = Math.floor(Math.random() * 3)
    if (computerSelection == 0){
        console.log("Computer choice: Rock")
    } else if(computerSelection == 1) {
        console.log("Computer choice: Paper")
    } else {
        console.log("Computer choice: Scissors")
    }
    return computerSelection
}

function playerPlay () {
playerSelection = prompt("Enter your choice (Rock/Paper/Scissors)")
playerSelection = playerSelection.toLowerCase()
    if (playerSelection === "rock") {
        console.log("Your choice: Rock")
        return playerSelection = 0 
    } else if (playerSelection === "paper") {
        console.log("Your choice: Paper")
        return playerSelection = 1
    } else if (playerSelection === "scissors") {
        console.log("Your choice: Scissors")
        return playerSelection = 2
    }
}

function game () {


    if (playerSelection == computerSelection) {
        return console.log(`Draw
        \n Player score: ${playerScore} Computer score: ${computerScore}`)
    } 

    if (computerSelection == 0 && playerSelection == 1){
        playerScore++ 
        return console.log(`You win! Paper beats Rock
        \n Player score: ${playerScore} Computer score: ${computerScore}`)

    } else if (computerSelection == 0 && playerSelection == 2){
        computerScore++
        return console.log(`You lose! Rock beats Scissors
        \n Player score: ${playerScore} Computer score: ${computerScore}`)

    }

    if (computerSelection == 1 && playerSelection == 2){
        playerScore++
        return  console.log(`You win! Scissors beats Paper
        \n Player score: ${playerScore} Computer score: ${computerScore}`)

    } else if (computerSelection == 1 && playerSelection == 0){
       computerScore++
        return console.log(`You lose. Paper beats Rock
        \n Player score: ${playerScore} Computer score: ${computerScore}`)

    }

    if (computerSelection == 2 && playerSelection == 0) {
        playerScore++
        return console.log(`You win. Rock beats Scissors
        \n Player score: ${playerScore} Computer score: ${computerScore}`)

    } else if (computerSelection == 2 && playerSelection == 1){
        computerScore++
        return console.log(`You lose! Scissors beats Paper
        \n Player score: ${playerScore} Computer score: ${computerScore}`)

    } 

    if (playerSelection != 1 || playerSelection != 0 || playerSelection != 2){
        console.log("Invalid choice")
    }
}

function round () {
    playerPlay()
    computerPlay()
    game()
}

function roundCount (){
    
    for (let i = 0; i < 5; i++) {
        round() 
    }
     

}



roundCount()
round () 
