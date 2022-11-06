const Render = require("./Render");
const CheckInputValid = require("./CheckValid");
const GameJudgment = require("./GameJudgment");

function numToArr(num) {
  return [...String(num)];
}

class App {
  play() {
    const render = new Render();

    render.getUser().then((num) => {
      this.num = numToArr(num);
      const checkInputValid = new CheckInputValid({
        userNum: this.userNum,
      });

      try {
        checkInputValid.checkValidation();
      } catch (error) {
        throw new Error(error);
      }

      const gameJudgment = new GameJudgment({
        user: this.userNum,
        computer: this.computer,
      });

      const [ballCount, strikeCount] = gameJudgment.judgement();
      this.ball = ballCount;
      this.strikeCount = strikeCount;

      render.result({ ballCount: this.ball, strikeCount: this.strikeCount });

      if (this.strikeCount !== 3) {
        this.play();
      }
      if (this.strikeCount === 3) {
        render.replayQnA().then((userSelection) => {
          this.replayQnAResult = userSelection;

          if (this.replayQnAResult === "1") {
            this.computer = Computer();
            this.play();
          }

          if (this.replayQnAResult === "2") {
            MissionUtils.Console.print("수고하셨습니다!🎉");
          }
        });
      }
    });
  }
}

module.exports = App;
