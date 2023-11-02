let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let modal = document.getElementById("modal-back");
let closeModalButton = document.getElementById("close-modal");
let gameResultMessage = document.getElementById("game-result");

rock.addEventListener("click", () => {
    checkWhoWon(0, computerChoice());
});

paper.addEventListener("click", () => {
    checkWhoWon(1, computerChoice());
});

scissors.addEventListener("click", () => {
    checkWhoWon(2, computerChoice());
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

function computerChoice () {
    // generate random number between 0 - 2
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(`Generated random number: ${randomNumber}`);

    return randomNumber;
}

function checkWhoWon (playerHand, computerHand) {
    
    let message = `<p>You picked ${translateNumberToHand(playerHand)}</p>`
    message += `<p>Computer picked ${translateNumberToHand(computerHand)}</p><h4>`;
    
    // rock = 0, paper = 1, scissors = 2
    if (playerHand === 0 && computerHand === 1) {
        message += "Computer won!";
    } else if (playerHand === 0 && computerHand === 2) {
        message += "You won!";
    } else if (playerHand === 1 && computerHand === 0) {
        message += "You won!";
    } else if (playerHand === 1 && computerHand === 2) {
        message += "Computer won!";
    } else if (playerHand === 2 && computerHand === 0) {
        message += "Computer won!";
    } else if (playerHand === 2 && computerHand === 1) {
        message += "You won!";
    } else if (playerHand === computerHand) {
        message += "It's a draw!";
    } else {
        message += "Sorry, unexpected error occured....";
    }

    message += "</h4>";

    gameResultMessage.innerHTML = message;

    modal.style.display = "block";
}

function translateNumberToHand (number) {
    switch (number) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "invalid choice!";
    }
}
