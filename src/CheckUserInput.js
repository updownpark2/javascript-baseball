function checkLength(userNum) {
  if (userNum.length !== 3) {
    return false;
  }
}
function checkDuplicates(userNum) {
  let checkArr = [];
  for (let i = 0; i < userNum.length; i++) {
    if (checkArr.includes(userNum[i]) === true) {
      return false;
    }
    checkArr.push(userNum[i]);
  }
}
function checkZero(userNum) {
  for (let i = 0; i < userNum.length; i++) {
    if (userNum[i] === "0") {
      return false;
    }
  }
}

class CheckUserInput {
  constructor({ userNum }) {
    this.userNum = userNum;
  }

  checkValidation() {
    if (checkLength(this.userNum) === false) {
      throw new Error("숫자를 3개 입력해주세요");
    }

    if (checkDuplicates(this.userNum) === false) {
      throw new Error("숫자에 중복이 있습니다");
    }

    if (checkZero(this.userNum) === false) {
      throw new Error("숫자에 0이 포함되어있습니다.");
    }
  }
}
module.exports = CheckUserInput;
