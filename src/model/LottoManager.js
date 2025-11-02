import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO } from "../constants/lottoConstants.js";
import Lotto from "./Lotto.js";

class LottoManager {
  #lottos;

  constructor(amount) {
    this.#lottos = [];
    this.#generateLottos(amount);
  }

  #generateLottos(amount) {
    const count = amount / LOTTO.PRICE;
    for (let i = 0; i < count; i++) {
      const numbers = this.#generateRandomNumbers();
      this.#lottos.push(new Lotto(numbers));
    }
  }

  #generateRandomNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBER_COUNT
    );
    return numbers;
  }

  getLottos() {
    return this.#lottos;
  }

  getCount() {
    return this.#lottos.length;
  }
}

export default LottoManager;
