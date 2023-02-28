var x = 0;
var y = 0;

playRound = (decision) => {

// play a 5 game round
    const choices = ["rock", "paper", "scissors"]
    
    // player's decision
    // let decision = prompt("Please enter: 'rock','paper','scissors'").toLowerCase();;
    // console.log(decision)
    
    // computer's decision
    let getComputerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(getComputerChoice)

    // initialize counters to 0 for the first round

    
        if (decision == "rock" & getComputerChoice == "rock" || decision == "scissors" & getComputerChoice == "scissors" || decision == "paper" & getComputerChoice == "paper") {
            console.log("Draw");
        } else if (decision == "rock" & getComputerChoice == "scissors" || decision == "paper" & getComputerChoice == "rock" || decision == "scissors" & getComputerChoice == "paper" ) {
            console.log("Win");
            x++
            console.log("Your score is: ", x);
        } else if (decision == "rock" & getComputerChoice == "paper"|| decision == "paper" & getComputerChoice == "scissors" || decision == "scissors" & getComputerChoice == "rock" ) {
            console.log("Lose");
            y++
            console.log("Their score is: ",y)
        }
    
}
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', function (e) {
    playRound("rock")
  });
const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', function (e) {
    playRound("scissors")
});
const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', function (e) {
    playRound("paper")
});
// // decide if player wins or loses the game based on total round wins
// if (x>y) {
//         console.log("You win the game")
// }
// if (x<y) {
//         console.log("You lose the game")
// }
// if (x==y) {
//         console.log("You draw the game")
// }