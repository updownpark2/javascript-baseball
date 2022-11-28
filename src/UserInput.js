const { Console } = require("@woowacourse/mission-utils");

const UserInput = {
  number: (callback) => {
    Console.readline(`숫자를 입력해주세요`, callback);
  },
};
