let humanScore = 0 
let computerScore = 0


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

function playRound(humanChoice, computerChoice){
    if ((humanChoice == "paper" && (computerChoice == "scissors" || computerChoice == "rock")) 
        || (humanChoice == "rock" && computerChoice == "paper") 
        || (humanChoice == "scissors" && computerChoice == "rock")) {
        console.log("computer won this round");
        computerScore++
        
    }else if ((computerChoice == "paper" && (humanChoice == "scissors" || humanChoice == "rock")) 
    || (computerChoice == "rock" && humanChoice == "paper") 
    || (computerChoice == "scissors" && humanChoice == "rock")) {
        console.log("human won tihs round");
        humanScore++;
}else if (computerChoice == humanChoice){
    console.log("tie")
}else{
    console.log("please enter valid option")
}
}



let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection)

console.log(humanSelection)
console.log(computerScore)
console.log(computerSelection)