class GameRule {
  #strikeCount;
  #ballCount;
  constructor(strikeCount, ballCount) {
    this.#strikeCount = strikeCount;
    this.#ballCount = ballCount;
  }
  stringToArr(userInput) {
    return userInput.split("");
  }

  strikeCountUp() {
    this.#strikeCount = this.#strikeCount + 1;
  }
  ballCountUp() {
    this.#ballCount = this.#ballCount + 1;
  }

  strikeCalulation(computer, userInput, i) {
    if (computer[i] === this.stringToArr(userInput)[i]) {
      this.strikeCountUp();
    }
  }
  ballCalulation(computer, userInput, i) {
    console.log(this.stringToArr(userInput));

    if (
      computer.includes(this.stringToArr(userInput)[i]) &&
      computer[i] !== this.stringToArr(userInput)[i]
    ) {
      this.ballCountUp();
    }
  }

  totalCalculation(computer, userInput) {
    for (let i = 0; i < 3; i++) {
      this.strikeCalulation(computer, userInput, i);
      this.ballCalulation(computer, userInput, i);
    }
  }

  result() {
    return [this.#strikeCount, this.#ballCount];
  }
}

module.exports = GameRule;
