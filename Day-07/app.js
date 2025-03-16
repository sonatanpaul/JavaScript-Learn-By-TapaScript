function rockPaperScissorsGame() {
  const userChoicePrompt = prompt("Enter Rock, Paper, Scissors");
  let userChoice = userChoicePrompt.toLowerCase();

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
  }
  console.log("user selected", userChoice);
  console.log("computer selected", computerChoice);
}

rockPaperScissorsGame();

// console.log(Math.random());
