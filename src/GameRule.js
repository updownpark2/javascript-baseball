class GameRule {
  #strikeCount;
  #ballCount;
  constructor(strikeCount, ballCount) {
    this.strikeCount = strikeCount;
    this.ballCount = ballCount;
  }
  stringToArr(userInput) {
    return userInput.split("");
  }

  strikeCountUp() {
    this.strikeCount = this.#strikeCount + 1;
  }
  ballCountUp() {
    this.ballCount = this.#ballCount + 1;
  }

  calculation(computer, userInput) {
    let i = 0;
    for (; i < 3; i++) {
      if (computer[i] === userInput[i]) {
        this.strikeCountUp();
      }
      if (computer.includes(userInput[i]) && computer[i] !== userInput[i]) {
        this.ballCountUp();
      }
    }
  }

  result() {
    return [this.#strikeCount, this.#ballCount];
  }
}
