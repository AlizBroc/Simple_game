let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreSpan = document.querySelector("#user-score");
const computerScoreSpan = document.querySelector("#computer-score");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const showWinner = (/** @type {boolean} */ userWin, /** @type {any} */ userChoice, /** @type {string} */ computerChoice) => {
  if (userWin) {
    userScore++;
    if (userScoreSpan) userScoreSpan.textContent = userScore.toString();
    if (msg) {
      msg.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
      /** @type {HTMLElement} */(msg).style.backgroundColor = "green";
    }
  } else {
    computerScore++;
    if (computerScoreSpan) computerScoreSpan.textContent = computerScore.toString();
    if (msg) {
      msg.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
      /** @type {HTMLElement} */(msg).style.backgroundColor = "red";
    }
  }
};

const drawGame = () => {
  if (msg) {
    msg.textContent = "It's a Draw!";
    /** @type {HTMLElement} */(msg).style.backgroundColor = "gray";
  }
};

const playGame = (/** @type {string} */ userChoice) => {
  const computerChoice = genComputerChoice();

  if (userChoice === computerChoice) {
    drawGame();
  } else {
    const userWin =
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper");

    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    playGame(userChoice);
  });
});
