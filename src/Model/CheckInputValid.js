const { ERROR } = require("../data/constants");

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
function checkRange(userNum) {
  if (/^[1-9]*$/g.test(userNum.join("")) === false) {
    return false;
  }
}

function checkRangeOfRetryUserInput(retryNum) {
  if (/^[1-2]*$/g.test([...String(retryNum)].join("")) === false) {
    return false;
  }
}
function checkLengthOfRetryUserInput(retryNum) {
  if ([...String(retryNum)].length !== 1) {
    return false;
  }
}

class CheckInputValid {
  checkUserInput(userNum) {
    if (checkLength(userNum) === false) {
      return ERROR.USER_INPUT_LENGTH;
    }

    if (checkDuplicates(userNum) === false) {
      return ERROR.USER_INPUT_DUPLICATES;
    }

    if (checkRange(userNum) === false) {
      return ERROR.USER_INPUT_RANGE;
    }
    return ERROR.USER_INPUT_PASS;
  }

  checkUserRetryInput(retryNum) {
    if (checkRangeOfRetryUserInput(retryNum) === false) {
      return ERROR.USER_RETRY_INPUT_RANGE;
    }

    if (checkLengthOfRetryUserInput(retryNum) === false) {
      return ERROR.USER_RETRY_INPUT_LENGTH;
    }
    return ERROR.USER_INPUT_PASS;
  }
}
module.exports = CheckInputValid;
