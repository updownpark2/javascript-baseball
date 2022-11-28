class Validation {
  checkNumber(userInput) {
    if (userInput.length !== 3) {
      throw new Error(`3개의 숫자만 입력해주세요`);
    }
    if (/^[0~9]*$/g.test(userInput) === false) {
      throw new Error(`숫자만 입력해주세요`);
    }
  }

  checkRange(userInput) {
    let checkArr = [];
    while (checkArr.length < 3) {
      if (checkArr.includes(userInput)) {
        throw new Error(`중복숫자가 있습니다.`);
      }
      checkArr.push(userInput);
    }
  }
}

module.exports = Validation;
