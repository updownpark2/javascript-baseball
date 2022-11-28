const UserOutput = require("./UserOutput");
const UserInput = require("./UserInput");
const Validation = require("./Validation");

const validation = new Validation();

class GameController {
  gameStart() {
    UserOutput.start();
    UserInput.number((userInput) => {
      validation.checkNumber(userInput);
    });
  }
}

module.exports = GameController;
