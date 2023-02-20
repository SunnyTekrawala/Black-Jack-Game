let cardArr = [];
let hasBlackJack = false;
let isAlive = false;
let sum = 0;
let message = "";
let mainBody = document.getElementById("mainBody");
let mainBody2 = document.getElementById("mainBody2");
let playerId = document.getElementById("player");
let result = document.getElementById("result");
let cards = document.getElementById("cards");
let total = document.getElementById("total");
let balance = document.getElementById("balance");
let previous = document.getElementById("previous");
let fixedMoney = 0;
let playerName = "";
let playerPurse = 0;

function mainBodyVisble() {
  playerName = document.getElementById("nameEl").value;
  playerPurse = document.getElementById("moneyEl").value;

  if (playerName == "") {
    previous.textContent = "Enter your name";
  } else {
    if (playerPurse > 20) {
      fixedMoney = playerPurse;
      mainBody2.style = "display: none";
      mainBody.style = "display: block";
      playerId.textContent = playerName + ": $ " + playerPurse;
    } else {
      previous.textContent = "Enter amount greater than 20";
    }
  }
}

function newGame() {
  let playerN = document.getElementById("nameEl");
  let playerP = document.getElementById("moneyEl");
  playerN.value = "";
  playerP.value = "";
  mainBody2.style = "display: block";
  mainBody.style = "display: none";
}

function getRandom() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber == 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function renderGame() {
  cards.textContent = "Cards: ";
  for (let i = 0; i < cardArr.length; i++) {
    cards.textContent += cardArr[i] + " ";
  }
  total.textContent = "Total: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum == 21) {
    message = "CONGRATULATIONS!! You got a Black-Jack";
    playerPurse = playerPurse + 500;
    hasBlackJack = true;
  } else {
    message = "Sorry, better luck next time";
    isAlive = false;
  }
  result.textContent = message;
  playerId.textContent = playerName + ": $ " + playerPurse;
}

function gameStart() {
  if (isAlive === false || hasBlackJack === true) {
    hasBlackJack = false;
    if (playerPurse > 0) {
      let firstCard = getRandom();
      let secondCard = getRandom();
      cardArr = [firstCard, secondCard];
      sum = firstCard + secondCard;
      isAlive = true;
      playerPurse = playerPurse - 20;
      renderGame();
    } else {
      balance.textContent = "Sorry, Insufficient balance!";
    }
  } else {
    previous.textContent = "Complete previous game first";
  }
}

function newCard() {
  if (hasBlackJack === false && isAlive === true) {
    previous.textContent = "";
    let thirdCard = getRandom();
    cardArr.push(thirdCard);
    sum += thirdCard;
    renderGame();
  }
}

function restartGame() {
  sum = "";
  cardArr = [];
  message = "Do you want to play the Game?";
  playerPurse = fixedMoney;
  playerId.textContent = playerName + ": $ " + playerPurse;
  result.textContent = message;
  total.textContent = "Total:" + sum;
  cards.textContent = "Cards:" + cardArr;
  balance.textContent = "";
  isAlive = false;
}
