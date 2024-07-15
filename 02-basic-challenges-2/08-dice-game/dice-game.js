function diceGameSimulation(numSimulations) {
  const gameResultObj = { dice1: 0, dice2: 0, sum: 0, result: "" };
  const gameResultArr = [];
  let i = 0;
  while (i < numSimulations) {
    gameResultObj["dice1"] = rollDice();
    gameResultObj["dice2"] = rollDice();
    gameResultObj["sum"] = gameResultObj["dice1"] + gameResultObj["dice2"];

    if (gameResultObj["sum"] === 7 || gameResultObj["sum"] === 11) {
      gameResultObj["result"] = "win";
    } else if (
      gameResultObj["sum"] === 2 ||
      gameResultObj["sum"] === 3 ||
      gameResultObj["sum"] === 12
    ) {
      gameResultObj["result"] = "lose";
    } else {
      gameResultObj["result"] = "roll again";
    }

    gameResultArr.push(gameResultObj);

    i++;
  }
  return gameResultArr;
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

module.exports = diceGameSimulation;
