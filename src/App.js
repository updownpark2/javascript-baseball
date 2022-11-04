const MissionUtils = require("@woowacourse/mission-utils");
const CheckNum = require("./CheckNum");
const Compare = require("./Compare");
const Computer = require("./Computer");
const Render = require("./Render");
class App {
  constructor() {
    this.computer = Computer();
  }
  play() {
    const compare = new Compare();
    MissionUtils.Console.readLine("숫자를 입력", (number) => {
      console.log(number);
      try {
        CheckNum({ num: [...String(number)] });
      } catch (error) {
        MissionUtils.Console.print(error);
        this.play();
      }
      const [ballCount, strikeCount] = compare.start({
        user: [...String(number)],
        computer: this.computer,
      });
      Render({
        ballCount: ballCount,
        strikeCount: strikeCount,
        endpoint: false,
      });

      this.play();
    });
  }
}
module.exports = App;
