


function getComputerChoice(){
    numbers = [0, 1, 2]
    const randomIndex = Math.floor(Math.random() * numbers.length)
    if (numbers[randomIndex] == 0){
        return("rock")
    }else if (numbers[randomIndex] == 1){
        return("paper")
    }else if(numbers[randomIndex] == 2 ){
        return("scissors")
    }
}


function getHumanChoice(){
    let move = prompt("choose");
    return move.toLowerCase();
}

// let humanScore = 0 
// let computerScore = 0

// function playRound(humanChoice, computerChoice){
//     if ((humanChoice == "paper" && (computerChoice == "scissors" || computerChoice == "rock")) 
//         || (humanChoice == "rock" && computerChoice == "paper") 
//         || (humanChoice == "scissors" && computerChoice == "rock")) {
//         computerScore++
//         console.log(`computer choice: ${computerChoice}, human choice: ${humanChoice}\ncomputer won this round!\nhuman score is ${humanScore} and computer score is ${computerScore}`) 
        
//     }else if ((computerChoice == "paper" && (humanChoice == "scissors" || humanChoice == "rock")) 
//     || (computerChoice == "rock" && humanChoice == "paper") 
//     || (computerChoice == "scissors" && humanChoice == "rock")) {
//         humanScore++;
//         console.log(`computer choice: ${computerChoice}, human choice: ${humanChoice}\n human won this round!\nhuman score is ${humanScore} and computer score is ${computerScore}`) 
// }else if (computerChoice == humanChoice){
//     console.log(`computer choice: ${computerChoice}, human choice: ${humanChoice}\n its a tie!\nhuman score is ${humanScore} and computer score is ${computerScore}`) 
// }else{
//     console.log("error:please enter valid option")
// }
// }

// let humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice();


// playRound(humanSelection, computerSelection)

function playGame(){
let humanScore = 0 
let computerScore = 0

function playRound(humanChoice, computerChoice){
    if ((humanChoice == "paper" && (computerChoice == "scissors" || computerChoice == "rock")) 
        || (humanChoice == "rock" && computerChoice == "paper") 
        || (humanChoice == "scissors" && computerChoice == "rock")) {
        computerScore++
        console.log(`computer choice: ${computerChoice}, human choice: ${humanChoice}\ncomputer won this round!\nhuman score is ${humanScore} and computer score is ${computerScore}`) 
        
    }else if ((computerChoice == "paper" && (humanChoice == "scissors" || humanChoice == "rock")) 
    || (computerChoice == "rock" && humanChoice == "paper") 
    || (computerChoice == "scissors" && humanChoice == "rock")) {
        humanScore++;
        console.log(`computer choice: ${computerChoice}, human choice: ${humanChoice}\n human won this round!\nhuman score is ${humanScore} and computer score is ${computerScore}`) 
}else if (computerChoice == humanChoice){
    console.log(`computer choice: ${computerChoice}, human choice: ${humanChoice}\n its a tie!\nhuman score is ${humanScore} and computer score is ${computerScore}`) 
}else{
    console.log("error:please enter valid option")
}
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection)

}

for (let i = 0; i <= 5; i++){
    playGame()
}