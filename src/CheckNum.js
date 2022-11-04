function checkLength(num) {
  if (num.length !== 3) {
    return false;
  }
}
function checkDuplicates(num) {
  let checkArr = [];
  for (let i = 0; i < num.length; i++) {
    if (checkArr.includes(num[i])) {
      return false;
    }
    checkArr.push(num[i]);
  }
}
function checkZero(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === 0) {
      return false;
    }
  }
}

function CheckNum({ num }) {
  if (checkLength(num) === false) {
    throw new Error("숫자를 3개 입력해주세용");
  } else if (checkDuplicates(num) === false) {
    throw new Error("숫자에 중복이 있으면 안돼용");
  } else if (checkZero(num) === false) {
    throw new Error("숫자에 0이있으면 안돼용");
  }
}
module.exports = CheckNum;
