const UserOutput = require("./UserOutput");
const UserInput = require("./UserInput");
const Validation = require("./Validation");
const GameRule = require("./GameRule");
const Computer = require("./Computer");

const validation = new Validation();
const gameRule = new GameRule(0, 0);

class GameController {
  getComputer() {
    this.computer = Computer();
  }

  gameStartMent() {
    UserOutput.start();
    this.getComputer();
  }

  gameStart() {
    UserInput.number((userInput) => {
      console.log(this.computer);
      validation.checkNumber(userInput);
      this.gameCalculation(userInput);
    });
  }

  gameCalculation(userInput) {
    gameRule.totalCalculation(this.computer, userInput);
    const gameResult = gameRule.result();
    console.log(gameResult);
    if (this.gameEnd(gameResult) === true) {
      this.gameRetry(gameResult);
      return;
    }
    this.gameContinue(gameResult);
  }

  gameContinue(result) {
    UserOutput.showResult(result);
    gameRule.reset();
    this.gameStart();
  }

  gameRetry(result) {
    UserOutput.showResult(result);
    UserOutput.retry();
    UserInput.retry((userInput) => {});
  }

  gameEnd(result) {
    if (result[0] === 3) {
      return true;
    }
  }
}

module.exports = GameController;
