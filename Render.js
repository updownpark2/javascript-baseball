const MissionUtils = require("@woowacourse/mission-utils");

class Render {
  result({ ballCount, strikeCount }) {
    MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);

    if (strikeCount === 3) {
      this.restart = true;
      MissionUtils.Console.print(`3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    }

    if (ballCount === 0 && strikeCount === 0) {
      MissionUtils.Console.print(`낫싱`);
    }
  }
}
module.exports = Render;
