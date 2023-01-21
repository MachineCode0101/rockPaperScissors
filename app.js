const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("your-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

//grabs the buttons
//(e) means event
possibleChoices.forEach(button => button.addEventListener("click", (e) =>{
    //whatever i click, i get the id
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))



function generateComputerChoice(){
   const randomNumber = Math.floor(Math.random() * 3 + 1 ) //possibleChoices.length = 3

   if (randomNumber === 1){
    computerChoice = "rock"
   } else if (randomNumber === 2){
    computerChoice = "paper"
   }else{
    computerChoice = "scissors"
   }

   computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    // rock rock, paper paper, scissors scissors
    if (computerChoice === userChoice){
        result = "it's a draw"
    } else if (computerChoice === "rock" && userChoice === "paper"){
        result = "You won!"
    } else if (computerChoice === "rock" && userChoice === "scissors"){
        result = "You lost!"
    } else if (computerChoice === "scissors" && userChoice === "paper"){
        result = "You lost!"
    } else if (computerChoice === "scissors" && userChoice === "rock"){
        result = "You win!"
    } else if (computerChoice === "paper" && userChoice === "scissors"){
        result = "You won!"
    } else if (computerChoice === "paper" && userChoice === "rock"){
        result = "You lost!"
    }
    resultDisplay.innerHTML = result
}

