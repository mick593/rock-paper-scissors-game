let playerScore = 0
let computerScore = 0


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

function reset() {
    playerScore = 0;
    computerScore = 0;
    let score = document.getElementById('score')
    score.textContent = 0

    score = document.getElementById('cmptscore')
    score.textContent = 0
}
// let player = "paper"
// play(player, counterPlay())
function writeToPage(msg) {
    document.getElementById("player").innerHTML += "\\n" + msg
    
}

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', function(e) {
    if(playerScore >=5 || computerScore >= 5) return
    let winner = play('rock', counterPlay())
    updateScore(winner)
}
);

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', function(e) {
    if(playerScore >=5 || computerScore >= 5) return
    let winner = play('paper', counterPlay())
    updateScore(winner)
}
);

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', function(e) {
    if(playerScore >=5 || computerScore >= 5) return
    let winner = play('scissors', counterPlay())
    updateScore(winner)
}
);

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', function(e) {
    reset()
}
);

function updateScore(winner) {
    if(winner === 'player') {
        playerScore++;
        let score = document.getElementById('score')
        score.textContent = playerScore
    }

    if(winner === 'computer') {
        computerScore++;
        let score = document.getElementById('cmptscore')
        score.textContent = computerScore
    }

    if(computerScore >= 5) {
        const div = document.createElement('div')
        div.textContent = "Computer Win!  Press restart if you want to play Again!"
        const board = document.getElementById("scoreBoard")
        board.appendChild(div)
    }

    if(playerScore >= 5) {
        const div = document.createElement('div')
        div.textContent = "Player Win! Press restart if you want to play Again!"
        const board = document.getElementById("scoreBoard")
        board.appendChild(div)
    }
}

function rock() {
    playerIn = "rock"
    inp = 1;

    
}
function game() {

    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++) {

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



