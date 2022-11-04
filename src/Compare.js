const MissionUtils = require("@woowacourse/mission-utils");
class Compare {
  setState(newdata) {
    this.data = newdata;
    MissionUtils.Console.readLine("숫자를 입력", (number) => {
      console.log(number);
      try {
        CheckNum({ num: [...String(number)] });
      } catch (error) {
        MissionUtils.Console.print(error);
        this.play();
      }
    });
  }

  start({ user, computer }) {
    let ballCount = 0;
    let strikeCount = 0;
    for (let i = 0; i < 3; i++) {
      if (user[i] === computer[i]) {
        strikeCount = strikeCount + 1;
      }
      if (user[i] !== computer[i] && computer.includes(user[i]) === true) {
        ballCount = ballCount + 1;
      }
      console.log(user, computer);
    }
    return [ballCount, strikeCount];
  }

  win({ retry, end, strikeCount }) {
    if (strikeCount === 3) {
      MissionUtils.Console.readLine("1, 2중 선택", (number) => {
        if (number === 1) {
          retry();
        }
        if (number === 2) {
          end();
        }
      });
    }
  }
  continue() {
    if (this.strikeCount !== 3) {
    }
  }
}

module.exports = Compare;
