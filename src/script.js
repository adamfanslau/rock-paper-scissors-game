let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

rock.addEventListener("click", playerChoseRock);
paper.addEventListener("click", playerChosePaper);
scissors.addEventListener("click", playerChoseScissors);

function playerChoseRock (event) {
    checkWhoWon(0, computerChoice());
}

function playerChosePaper (event) {
    checkWhoWon(1, computerChoice());
}

function playerChoseScissors (event) {
    checkWhoWon(2, computerChoice());
}

function computerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);

    return randomNumber;
}

function checkWhoWon (playerHand, computerHand) {
    // rock = 0, paper = 1, scissors = 2
    let message = `Computer picked ${translateNumberToHand(computerHand)}\n`;
    
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

    alert(message);
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
