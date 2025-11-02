import { RANK } from "../constants/lottoConstants.js";
import LottoService from "./LottoService.js";

class StatisticsService {
  constructor() {
    this.results = {
      [RANK.FIRST]: 0,
      [RANK.SECOND]: 0,
      [RANK.THIRD]: 0,
      [RANK.FOURTH]: 0,
      [RANK.FIFTH]: 0,
    };
    this.totalPrize = 0;
  }

  calculateStatistics(lottos, winningNumbers, bonusNumber) {
    const service = new LottoService(winningNumbers, bonusNumber);

    lottos.forEach((lotto) => {
      const rank = service.getRank(lotto.getNumbers());
      const prize = service.getPrize(rank);
      this.addResult(rank, prize);
    });
  }

  addResult(rank, prize) {
    if (rank) {
      this.results[rank] += 1;
    }
    this.totalPrize += prize;
  }

  calculateROI(amount) {
    const roi = (this.totalPrize / amount) * 100;
    return Math.round(roi * 10) / 10;
  }

  getResults() {
    return this.results;
  }

  getTotalPrize() {
    return this.totalPrize;
  }
}

export default StatisticsService;
