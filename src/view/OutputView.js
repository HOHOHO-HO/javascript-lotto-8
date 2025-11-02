import { RANK, PRIZE } from "../constants/lottoConstants.js";
import { Console } from "@woowacourse/mission-utils";

export const OutputView = {
  printLottoCount(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers().join(", ");
      Console.print(`[${numbers}]`);
    });
  },

  printStatistics(results) {
    Console.print('\n당첨 통계\n---');
    this.printRank(RANK.FIFTH, '3개 일치', results);
    this.printRank(RANK.FOURTH, '4개 일치', results);
    this.printRank(RANK.THIRD, '5개 일치', results);
    this.printRank(RANK.SECOND, '5개 일치, 보너스 볼 일치', results);
    this.printRank(RANK.FIRST, '6개 일치', results);
  },

  printRank(rank, matchText, results) {
    const count = results[rank];
    const prize = PRIZE[rank].toLocaleString();
    Console.print(`${matchText} (${prize}원) - ${count}개`);
  },

  printROI(roi) {
    Console.print(`총 수익률은 ${roi}%입니다.`);
  },
};
