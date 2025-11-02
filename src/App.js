import { OutputView } from "./view/OutputView.js";
import LottoManager from "./model/LottoManager.js";
import StatisticsService from "./service/StatisticsService.js";
import { Console } from "@woowacourse/mission-utils";
import { InputView } from "./view/InputView.js";

class App {
  async run() {
    try {
      const amount = await this.#getAmount();
      const lottoManager = new LottoManager(amount);
      const lottos = lottoManager.getLottos();

      OutputView.printLottoCount(lottoManager.getCount());
      OutputView.printLottos(lottos);

      const winningNumbers = await this.#getWinningNumbers();
      const bonusNumber = await this.#getBonusNumber();

      const statistics = new StatisticsService();
      statistics.calculateStatistics(lottos, winningNumbers, bonusNumber);

      OutputView.printStatistics(statistics.getResults());
      const roi = statistics.calculateROI(amount);
      OutputView.printROI(roi);
    } catch (error) {
      Console.print(error.message);
      this.run();
    }
  }

  async #getAmount() {
    return InputView.inputPurchaseAmount();
  }

  async #getWinningNumbers() {
    return InputView.inputWinningNumbers();
  }

  async #getBonusNumber() {
    return InputView.inputBonusNumber();
  }
}

export default App;
