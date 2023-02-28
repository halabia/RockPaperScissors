var x = 0;
var y = 0;

playRound = (decision) => {
    const choices = ["rock", "paper", "scissors"]
    
    // computer's decision
    let getComputerChoice = choices[Math.floor(Math.random()*choices.length)];
    const content3 = document.querySelector('#computer');  
    content3.textContent = "The computer selected: " + getComputerChoice;

        // different round outcomes
        if (decision == "rock" & getComputerChoice == "rock" || decision == "scissors" & getComputerChoice == "scissors" || decision == "paper" & getComputerChoice == "paper") {
            const content = document.querySelector('#round');  
            content.textContent = "This round was a draw";
        } else if (decision == "rock" & getComputerChoice == "scissors" || decision == "paper" & getComputerChoice == "rock" || decision == "scissors" & getComputerChoice == "paper" ) {
            x++
            const content = document.querySelector('#round');  
            content.textContent = "You win this round";
        } else if (decision == "rock" & getComputerChoice == "paper"|| decision == "paper" & getComputerChoice == "scissors" || decision == "scissors" & getComputerChoice == "rock" ) {
            y++
            const content = document.querySelector('#round');  
            content.textContent = "You lose this round";
        }

        const content2 = document.querySelector('#result');  
        content2.textContent = "The scores are: " + x + " - " + y;
        
    // decide if player wins or loses the game based on total round wins
    if (x == 5) {
        const content = document.querySelector('#game');  
        content.textContent = "You won the game";
        content.setAttribute('style', 'color: white; background: green;'); 
        x = 0;
        y = 0;
    }
    else if (y == 5) {
        const content = document.querySelector('#game');  
        content.textContent = "You lost the game";
        content.setAttribute('style', 'color: white; background: red;'); 
        x = 0;
        y = 0;
    }
}

// setup scenarios for each button press
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

