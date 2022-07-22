function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let rpsArray = ["rock", "paper", "scissors"];
  let computerSelection = rpsArray[randomNumber];
  return computerSelection.toLowerCase();
}

function getUserChoice() {
  let userChoice = prompt("Choose rock, paper, or scissors");
  let playerSelection;
  if (userChoice === null) {
    playerSelection = userChoice;
  } else {
    playerSelection = userChoice.toLowerCase();
  }
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper.";
  } else if (playerSelection === null) {
    return "You canceled the game!";
  } else {
    return "You didn't enter a valid selection. Try again.";
  }
}

function play5times() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = getUserChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
  }
}

play5times();
