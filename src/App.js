const MissionUtils = require("@woowacourse/mission-utils");
const CheckUserInput = require("./CheckUserInput");
const Game = require("./Game");
const Computer = require("./Computer");
const Render = require("../Render");
class App {
  constructor() {
    this.computer = Computer();
    this.userTryCount = 0;
  }
  play() {
    if (this.userTryCount === 0) {
      MissionUtils.Console.print("게임을 시작합니다");
    }
    this.userTryCount = this.userTryCount + 1;
    MissionUtils.Console.readLine("숫자를 입력해주세요!", (userNum) => {
      this.userNum = [...String(userNum)];
      const checkuserinput = new CheckUserInput({ userNum: this.userNum });
      try {
        checkuserinput.checkValidation();
      } catch (error) {
        MissionUtils.Console.print(error);
        this.play();
      }

      const game = new Game({ user: this.userNum, computer: this.computer });

      const [ballCount, strikeCount] = game.judgement();
      this.ball = ballCount;
      this.strikeCount = strikeCount;

      const render = new Render();
      render.result({ ballCount: this.ball, strikeCount: this.strikeCount });
      if (render.restart !== true) {
        this.play();
      }
      if (render.restart === true) {
        MissionUtils.Console.readLine("1, 2중 선택해주세요", (number) => {
          this.restartNumber = number;
        });
      }

      if (this.restartNumber === 1) {
        this.userTryCount = 0;
        this.computer = Computer();
        this.play();
      }

      if (this.restartNumber === 0) {
        MissionUtils.Console.print(`수고하셨습니다.`);
      }
    });
  }
}

module.exports = App;
