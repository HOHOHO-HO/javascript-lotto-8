import { Console } from "@woowacourse/mission-utils";
import VALIDATOR from "../utils/Validator.js";

export const InputView = {
  async inputPurchaseAmount() {
    try {
      const input = await Console.readLineAsync("구매금액을 입력해 주세요.\n");
      const amount = Number(input);
      VALIDATOR.validateAmount(amount);
      return amount;
    } catch (error) {
      throw error;
    }
  },

  async inputWinningNumbers() {
    try {
      const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
      const numbers = input.split(",").map(Number);
      VALIDATOR.validateWinningNumbers(numbers);
      return numbers;
    } catch (error) {
      throw error;
    }
  },

  async inputBonusNumber() {
    try {
      const input = await Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n"
      );
      const bonus = Number(input);
      VALIDATOR.validateBonusNumber(bonus);
      return bonus;
    } catch (error) {
      throw error;
    }
  },
};
