const rps = ["Rock", "Paper", "Scissors"];
let wins = 0;
let ties = 0;
let losses = 0;
function getRandomNumber() {
  return Math.floor(Math.random() * rps.length);
}
function gametime(randomNumber, userInput) {
  if (randomNumber === userInput) {
    ties++;
    return `Computer chose ${
      randomNumber === 0 ? "Rock" : randomNumber == 1 ? "Paper" : "Scissors"
    } Tie!`;
  }
  if (randomNumber === 1 && userInput === 0) {
    losses++;
    return "Computer chose Paper You lost!";
  }
  if (randomNumber === 2 && userInput === 0) {
    wins++;
    return "Computer chose Scissors Congrats you Won!";
  }
  if (randomNumber === 0 && userInput === 1) {
    wins++;
    return "Computer chose rock Congrats you Won!";
  }

  if (randomNumber === 2 && userInput === 1) {
    losses++;
    return "Computer chose Scissors You lost!";
  }
  if (randomNumber === 0 && userInput === 2) {
    losses++;
    return "Computer chose rock You lost!";
  }
  if (randomNumber === 1 && userInput === 2) {
    wins++;
    return "Computer chose Paper Congrats you Won!";
  }
}

function playGame() {
  const randomNumber = getRandomNumber();
  const userInput = prompt("What is your choice?(R,S,P)").toUpperCase();
  let index;
  if (userInput === "P") {
    index = 1;
  } else if (userInput === "S") {
    index = 2;
  } else if (userInput === "R") {
    index = 0;
  } else {
    alert("Put a valid input! R for rock, S for scissors, P for paper!");
    playGame();
    return;
  }

  const result = gametime(randomNumber, index);
  alert(result);
}
function replay() {
  let keepPlaying = true;
  while (keepPlaying) {
    playGame();
    alert(`
    wins: ${wins}
    losses: ${losses}
    ties: ${ties}
    `);
    keepPlaying = confirm("Go next coward.");
  }
}
replay();
