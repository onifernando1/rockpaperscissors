let rock = 0;
let paper = 1; 
let scissors = 2;
let computerSelection = undefined;
let playerSelection = undefined;
let computerScore = 0;
let playerScore = 0;
const results = document.querySelector(".results")

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


function playerPlay() {
    if (playerSelection == 0) {
        console.log("Player Selection: Rock")
    } else if (playerSelection == 1) {
        console.log ("Player Selection: Paper")
    } else if (playerSelection == 2) {
        console.log("Player Selection: Scissors")
    }

}

function game () {


    if (playerSelection == computerSelection) {
        return results.textContent = "Draw"
        
    } 

    if (computerSelection == 0 && playerSelection == 1){
        playerScore++ 
        return results.textContent ="Results: You win! Paper beats Rock"

    } else if (computerSelection == 0 && playerSelection == 2){
        computerScore++
        return results.textContent =("Results: You lose! Rock beats Scissors")

    }

    if (computerSelection == 1 && playerSelection == 2){
        playerScore++
        return results.textContent ="Results: You win! Scissors beats Paper"

    } else if (computerSelection == 1 && playerSelection == 0){
       computerScore++
       return results.textContent ="Results: You lose. Paper beats Rock"

    }

    if (computerSelection == 2 && playerSelection == 0) {
        playerScore++
        return results.textContent ="Results: You win. Rock beats Scissors"

    } else if (computerSelection == 2 && playerSelection == 1){
        computerScore++
        return results.textContent = "Results: You lose! Scissors beats Paper"

    } 

    if (playerSelection != 1 || playerSelection != 0 || playerSelection != 2){
        console.log("Invalid choice")
    }

}

//Player Selection

buttonRock = document.querySelector(".rock");
buttonRock.addEventListener('click', () => {
     playerSelection = 0
})

buttonPaper = document.querySelector(".paper");
buttonPaper.addEventListener('click', () => {
     playerSelection = 1
})

buttonScissors = document.querySelector(".scissors");
buttonScissors.addEventListener('click', () => {
    playerSelection = 2
})



displayScore = function() {
    const div = document.querySelector(".score")
    div.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
}


checkScore = function() {
    if (playerScore == 5) {
        alert("You win")
    }    
}  

if (computerScore == 5){
        alert("Computer Wins")
    }


function round () {
    computerPlay()
    playerPlay()
    game()
    displayScore()
    checkScore()
}


//Make button play 

buttons = document.querySelectorAll("#button");
buttons.forEach((button) => {   
    button.addEventListener('click', () => {
        round()
})
})