const VALIDATOR = {
  validateAmount(amount) {
    if (Number.isNaN(amount)) {
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    }
    if (amount < 1000 || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }
  },

  validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
    if (numbers.some((n) => Number.isNaN(n))) {
      throw new Error("[ERROR] 당첨 번호는 숫자여야 합니다.");
    }
    const duplicates = new Set(numbers);
    if (duplicates.size !== 6) {
      throw new Error("[ERROR] 당첨 번호에 중복된 숫자가 있습니다.");
    }
  },

  validateBonusNumber(bonus) {
    if (Number.isNaN(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    if (bonus < 1 || bonus > 45) {
      throw new Error("[ERROR] 보너스 번호는 1~45 사이여야 합니다.");
    }
  },
};

export default VALIDATOR;
