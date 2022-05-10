console.log("Hello World")

let rock = 0;
let paper = 1; 
let scissors = 2;
let computerSelection = undefined
let playerSelection = undefined

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
    return playerSelection = 0
    } else if (playerSelection === "paper") {
    return playerSelection = 1
    } else if (playerSelection === "scissors") {
    return playerSelection = 2
    }
}

function game () {
    if (playerSelection == computerSelection) {
        console.log("Draw")
    } 

    if (computerSelection == 0 && playerSelection == 1){
        return console.log("You win! Paper beats Rock")
    } else if (computerSelection == 0 && playerSelection == 2){
        return console.log("You lose! Rock beats Scissors")
    }

    if (computerSelection == 1 && playerSelection == 2){
        return  console.log("You win! Scissors beats Paper")
    } else if (computerSelection == 1 && playerSelection == 0){
        return console.log("You lose. Paper beats Rock")
    }

    if (computerSelection == 2 && playerSelection == 0) {
        return console.log("You win. Rock beats Scissors")
    } else if (computerSelection == 2 && playerSelection == 1){
        return console.log("You lose! Scissors beats Paper")
    } 
}

playerPlay()
computerPlay()
game ()
console.log(playerSelection, computerSelection)
