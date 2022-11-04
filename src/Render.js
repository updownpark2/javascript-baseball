const MissionUtils = require("@woowacourse/mission-utils");
function Render({ ballCount, strikeCount }) {
  if (strikeCount === 3) {
    MissionUtils.Console.print(`3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    endpoint === true;
  }
  if (strikeCount === 0 && ballCount === 0) {
    MissionUtils.Console.print(`낫싱`);
  }
  MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
}
module.exports = Render;
