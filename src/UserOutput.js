const { Console } = require("@woowacourse/mission-utils");

const UserOutput = {
  start: () => {
    Console.print(`숫자야구 게임을 시작합니다.`);
  },

  showResult: (result) => {
    if (result[0] === 0 && result[1] === 0) {
      Console.print(`낫씽`);
    }
    if (result[0] !== 0 && result[1] === 0) {
      Console.print(`${result[0]}스트라이크`);
    }
    if (result[0] === 0 && result[1] !== 0) {
      Console.print(`${result[1]}볼`);
    }
    if (result[0] !== 0 && result[1] !== 0) {
      Console.print(`${result[1]}볼 ${result[0]}스트라이크`);
    }
  },

  retry: () => {
    Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
  },
};

module.exports = UserOutput;
