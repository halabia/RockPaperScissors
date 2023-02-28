const choices = ["rock", "paper", "scissors"]

// computer's decision
let getComputerChoice = choices[Math.floor(Math.random()*choices.length)];
console.log(getComputerChoice)

// player's decision
let decision = prompt("Please enter: 'rock','paper','scissors'").toLowerCase();;
console.log(decision)

if (decision == "rock" & getComputerChoice == "rock" || decision == "scissors" & getComputerChoice == "scissors" || decision == "paper" & getComputerChoice == "paper") {
    console.log("Draw");
} else if (decision == "rock" & getComputerChoice == "scissors" || decision == "paper" & getComputerChoice == "rock" || decision == "scissors" & getComputerChoice == "paper" ) {
    console.log("Win");
} else if (decision == "rock" & getComputerChoice == "paper"|| decision == "paper" & getComputerChoice == "scissors" || decision == "scissors" & getComputerChoice == "rock" ) {
    console.log("Lose");
}