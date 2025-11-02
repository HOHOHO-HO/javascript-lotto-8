class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.some((n) => isNaN(n))) {
      throw new Error("[ERROR] 로또 번호는 숫자만 가능합니다.");
    }
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.some((n) => n < 1 || n > 45)) {
      throw new Error("[ERROR] 로또 번호는 1~45 사이여야 합니다.");
    }
    const duplicates = new Set(numbers);
    if (duplicates.size !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
