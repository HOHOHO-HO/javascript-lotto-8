import StatisticsService from "../../src/service/StatisticsService.js";
import { RANK, PRIZE } from "../../src/constants/lottoConstants.js";

describe("StatisticsService 클래스 테스트", () => {
  let statisticsService;

  beforeEach(() => {
    statisticsService = new StatisticsService();
  });

  test("addResult는 등수별 통계와 총 상금을 정확히 누적한다.", () => {
    statisticsService.addResult(RANK.FIFTH, PRIZE[RANK.FIFTH]);
    statisticsService.addResult(RANK.FIFTH, PRIZE[RANK.FIFTH]);
    statisticsService.addResult(RANK.FOURTH, PRIZE[RANK.FOURTH]);

    const results = statisticsService.getResults();
    const totalPrize = statisticsService.getTotalPrize();

    expect(results[RANK.FIFTH]).toBe(2);
    expect(results[RANK.FOURTH]).toBe(1);
    expect(results[RANK.THIRD]).toBe(0);
    expect(totalPrize).toBe(5000 * 2 + 50000 * 1);
  });

  test("calculateROI는 총 수익률을 소수점 둘째 자리에서 반올림하여 정확히 계산한다.", () => {
    const amount = 8000;
    statisticsService.addResult(RANK.FIFTH, PRIZE[RANK.FIFTH]);

    const roi = statisticsService.calculateROI(amount);
    expect(roi).toBe(62.5);
  });

  test("calculateStatistics는 전체 로또에 대한 통계를 올바르게 계산한다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottos = [
      { getNumbers: () => [1, 2, 3, 10, 11, 12] },
      { getNumbers: () => [1, 2, 3, 4, 11, 12] },
      { getNumbers: () => [1, 2, 3, 4, 5, 12] },
      { getNumbers: () => [1, 2, 3, 4, 5, 7] },
      { getNumbers: () => [1, 2, 3, 4, 5, 6] },
      { getNumbers: () => [10, 11, 12, 13, 14, 15] },
    ];

    statisticsService.calculateStatistics(lottos, winningNumbers, bonusNumber);
    const results = statisticsService.getResults();

    expect(results[RANK.FIRST]).toBe(1);
    expect(results[RANK.SECOND]).toBe(1);
    expect(results[RANK.THIRD]).toBe(1);
    expect(results[RANK.FOURTH]).toBe(1);
    expect(results[RANK.FIFTH]).toBe(1);
  });
});
