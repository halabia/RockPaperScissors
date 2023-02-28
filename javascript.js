var x = 0;
var y = 0;

playRound = (decision) => {

// play a 5 game round
    const choices = ["rock", "paper", "scissors"]
    
    // const container = document.querySelector('#container');  

    // computer's decision
    let getComputerChoice = choices[Math.floor(Math.random()*choices.length)];
    const content3 = document.querySelector('#computer');  
    content3.textContent = "The computer selected: " + getComputerChoice;
    
    // console.log(getComputerChoice)

        if (decision == "rock" & getComputerChoice == "rock" || decision == "scissors" & getComputerChoice == "scissors" || decision == "paper" & getComputerChoice == "paper") {
            const content = document.querySelector('#round');  
            content.textContent = "Draw";
        } else if (decision == "rock" & getComputerChoice == "scissors" || decision == "paper" & getComputerChoice == "rock" || decision == "scissors" & getComputerChoice == "paper" ) {
            x++
            const content = document.querySelector('#round');  
            content.textContent = "Win";
        } else if (decision == "rock" & getComputerChoice == "paper"|| decision == "paper" & getComputerChoice == "scissors" || decision == "scissors" & getComputerChoice == "rock" ) {
            y++
            const content = document.querySelector('#round');  
            content.textContent = "Lose";
        }

        const content2 = document.querySelector('#result');  
        content2.textContent = "The scores are: " + x + " - " + y;
        
    // decide if player wins or loses the game based on total round wins
    if (x == 5) {
        console.log("You win the game")
    }
    else if (y == 5) {
        console.log("You lose the game")
    }
        // container.appendChild(content)
    
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

