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

  gameStart() {
    UserOutput.start();
    this.getComputer();
    UserInput.number((userInput) => {
      console.log(this.computer);
      validation.checkNumber(userInput);
      this.gameCalculation(userInput);
    });
  }

  gameCalculation(userInput) {
    gameRule.totalCalculation(this.computer, userInput);
    console.log(gameRule.result());
  }
}

module.exports = GameController;
