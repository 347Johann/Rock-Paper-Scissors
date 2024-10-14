display = document.getElementById("display");
playerDisplay = document.getElementById("playerInputDisplay");
CMPDisplay = document.getElementById("computerInputDisplay");
winMessages = ["TIE", "ROCK CRUSHES SCISSORS", "PAPER WRAPS ROCK", "SCISSORS CUTS PAPER"];

function playerChoice(playerChoice) {
    computerChoice = Math.floor(Math.random() * 3 + 1);
    
    playerDisplay.innerHTML = `<img src="https://shorturl.at/WU8CN" alt="">PLAYER INPUT: ${(playerChoice === 1) ? "ROCK" : (playerChoice === 2) ? "PAPER" : "SCISSORS"}`;
    CMPDisplay.innerHTML = `<img src="https://shorturl.at/Ug3tm" alt="">COMPUTER INPUT: ${(computerChoice === 1) ? "ROCK" : (computerChoice === 2) ? "PAPER" : "SCISSORS"}`;

    if (playerChoice === computerChoice) {
        display.textContent = winMessages[0]; // TIE
    }
    else if ((playerChoice === 1 && computerChoice === 3 ||
        playerChoice === 2 && computerChoice === 1 ||
        playerChoice === 3 && computerChoice === 2)){
        display.textContent = `${winMessages[playerChoice]} PLAYER WINS!`
    }
    else{
        display.textContent = `${winMessages[computerChoice]} COMPUTER WINS!`
    }
}
