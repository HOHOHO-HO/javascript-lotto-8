import LottoManager from "../../src/model/LottoManager.js";
import Lotto from "../../src/model/Lotto.js";

describe("LottoManager 클래스 테스트", () => {
  const amount = 8000;
  let lottoManager;

  beforeEach(() => {
    lottoManager = new LottoManager(amount);
  });

  test("구입 금액에 해당하는 개수의 로또를 발행한다.", () => {
    const count = lottoManager.getCount();
    expect(count).toBe(8);
  });

  test("getLottos()는 발행된 로또 목록을 배열로 반환한다.", () => {
    const lottos = lottoManager.getLottos();
    expect(lottos).toBeInstanceOf(Array);
    expect(lottos.length).toBe(8);
  });

  test("발행된 로또는 모두 Lotto 클래스의 인스턴스여야 한다.", () => {
    const lottos = lottoManager.getLottos();
    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });
});
