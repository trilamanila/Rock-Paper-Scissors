let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementId("user-score");
const computerScore_span = document.getElementId("user-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementId("r");
const scissors_div = document.getElementId("s");
const paper_div = document.getElementId("p");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();

  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  results_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
  userChoice_div.classlist.add('green-glow');
  setTimeout(() => userChoice_div.classlist.remove('green-glow'), 300);
}


function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  results_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost!`;
  userChoice_div.classlist.add('red-glow');
  setTimeout(() => userChoice_div.classlist.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  results_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
  userChoice_div.classlist.add('gray-glow');
  setTimeout(() => userChoice_div.classlist.remove('gray-glow'), 300);
}




funtion game(userChoice) {
  const getComputerChoice = getComputerChoice();
  switch (userChoice + getComputerChoice) {
    case "rs":
    case "pr":
    case "sp":
    win(userChoice, computerChoice);
    break;
    case "rp":
    case "ps:
    case "sr":
    lose(userChoice, computerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
    draw(userChoice, computerChoice);
    break;
  }
}
  rock_div.addEventListener('click', () =>game("r");
  scissors_div.addEventListener('click',() => game("s"));
  paper_div.addEventListener('click', () => game("p"));

}

main();
