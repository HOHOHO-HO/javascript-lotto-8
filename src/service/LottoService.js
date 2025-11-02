import { RANK, PRIZE } from "../constants/lottoConstants.js";

class LottoService {
  constructor(winningNumbers, bonusNumber) {
    this.winningNumbers = new Set(winningNumbers);
    this.bonusNumber = bonusNumber;
  }

  #getMatchCount(lottoNumbers) {
    const lottoSet = new Set(lottoNumbers);
    return Array.from(this.winningNumbers).filter((num) => lottoSet.has(num))
      .length;
  }

  #hasBonus(lottoNumbers) {
    return lottoNumbers.includes(this.bonusNumber);
  }

  getRank(lottoNumbers) {
    const matchCount = this.#getMatchCount(lottoNumbers);
    const hasBonus = this.#hasBonus(lottoNumbers);

    if (matchCount === 6) {
      return RANK.FIRST;
    }
    if (matchCount === 5 && hasBonus) {
      return RANK.SECOND;
    }
    if (matchCount === 5) {
      return RANK.THIRD;
    }
    if (matchCount === 4) {
      return RANK.FOURTH;
    }
    if (matchCount === 3) {
      return RANK.FIFTH;
    }
    return null;
  }

  getPrize(rank) {
    return rank ? PRIZE[rank] : 0;
  }
}

export default LottoService;
