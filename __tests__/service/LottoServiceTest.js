import LottoService from "../../src/service/LottoService.js";
import { RANK } from "../../src/constants/lottoConstants.js";

describe("LottoService 클래스 테스트", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  const lottoService = new LottoService(winningNumbers, bonusNumber);

  test("6개 번호가 모두 일치하면 1등을 반환한다.", () => {
    const userLotto = [1, 2, 3, 4, 5, 6];
    const rank = lottoService.getRank(userLotto);
    expect(rank).toBe(RANK.FIRST);
  });

  test("5개 번호와 보너스 번호가 일치하면 2등을 반환한다.", () => {
    const userLotto = [1, 2, 3, 4, 5, 7];
    const rank = lottoService.getRank(userLotto);
    expect(rank).toBe(RANK.SECOND);
  });

  test("5개 번호가 일치하고 보너스 번호가 일치하지 않으면 3등을 반환한다.", () => {
    const userLotto = [1, 2, 3, 4, 5, 8];
    const rank = lottoService.getRank(userLotto);
    expect(rank).toBe(RANK.THIRD);
  });

  test("4개 번호가 일치하면 4등을 반환한다.", () => {
    const userLotto = [1, 2, 3, 4, 8, 9];
    const rank = lottoService.getRank(userLotto);
    expect(rank).toBe(RANK.FOURTH);
  });

  test("3개 번호가 일치하면 5등을 반환한다.", () => {
    const userLotto = [1, 2, 3, 8, 9, 10];
    const rank = lottoService.getRank(userLotto);
    expect(rank).toBe(RANK.FIFTH);
  });

  test("2개 번호만 일치하면 null을 반환한다.", () => {
    const userLotto = [1, 2, 8, 9, 10, 11];
    const rank = lottoService.getRank(userLotto);
    expect(rank).toBeNull();
  });
});
