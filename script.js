function counterPlay() {
    let choices = ["rock","paper","scissors"]
    let choose = choices[Math.floor(Math.random() * 3)];
    // console.log("Choose " + choose)
    return choose

}
// return : winner
function play(playerInput, computerInput) {
    playerInput = playerInput.toLowerCase()
    computerInput = computerInput.toLowerCase()
    if(playerInput == computerInput) {
        console.log("Draw")
        return "draw"
    } else if (playerInput == "paper") {
        if(computerInput == "rock") {
            console.log("Player win Computer")
            return "player"
        } else if (computerInput == "scissors") {
            console.log("Computer wins")
            return "computer"

        }
    } else if (playerInput == "rock") {
        if(computerInput == "scissors") {
            console.log("Player win Computer")
            return "player"
        } else if (computerInput == "paper") {
            console.log("Computer wins")
            return "computer"
        }
    } else if (playerInput == "scissors") {
        if(computerInput == "paper") {
            console.log("Player win Computer")
            return "player"
        } else if (computerInput == "rock") {
            console.log("Computer wins")
            return "computer"
        }
    }

}

// let player = "paper"
// play(player, counterPlay())
function writeToPage(msg) {
    document.getElementById("player").innerHTML += "\\n" + msg
    
}
let inp = 0
let playerIn;
function waitIn() {

}
function rock() {
    playerIn = "rock"
    inp = 1;

    
}
function game() {

    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++) {
        waitIn();
        let result = play(playerIn,counterPlay())
        if(result == "player") playerWins++
        else if (result == "computer")computerWins++
    }
    if(playerWins > computerWins) console.log("Player win Bot with score " 
    + playerWins + " : " + computerWins)
    else if (playerWins < computerWins) {
        console.log("Bot win player with score " 
    + computerWins + " : " + playerWins)
    } else {
        console.log("Draw")
    }
}