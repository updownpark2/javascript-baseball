class Validation {
  stringToArr(userInput) {
    return userInput.split("");
  }

  checkRange(userInput) {
    let checkArr = [];
    let i = 0;
    for (; i < 3; i++) {
      if (checkArr.includes(userInput[i])) {
        return false;
      }
      checkArr.push(userInput[i]);
    }
    return true;
  }

  checkNumber(userInput) {
    if (userInput.length !== 3) {
      throw new Error(`3개의 숫자만 입력해주세요.`);
    }
    if (/^[1-9]*$/g.test(userInput) === false) {
      throw new Error(`숫자만 입력해주세요.`);
    }
    if (this.checkRange(this.stringToArr(userInput)) === false) {
      throw new Error(`반복되지 않는 3개의 숫자를 입력해주세요.`);
    }
  }
}

module.exports = Validation;
