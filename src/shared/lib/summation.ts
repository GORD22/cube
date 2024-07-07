import { TBettingVariant } from "../types";

export const summation = (
  balance: number,
  rate: number,
  bettingVariant: TBettingVariant,
  rollResult: number
) => {
  if (
    (bettingVariant === "1" && rollResult === 1) ||
    (bettingVariant === "2" && rollResult === 2) ||
    (bettingVariant === "3" && rollResult === 3) ||
    (bettingVariant === "4" && rollResult === 4) ||
    (bettingVariant === "5" && rollResult === 5) ||
    (bettingVariant === "6" && rollResult === 6)
  ) {
    return balance + rate * 3;
  } else if (
    (bettingVariant === "1-3" && rollResult >= 1 && rollResult <= 3) ||
    (bettingVariant === "4-6" && rollResult >= 4 && rollResult <= 6) ||
    (bettingVariant === "even" && rollResult % 2 === 0) ||
    (bettingVariant === "odd" && rollResult % 2 !== 0)
  ) {
    return balance + rate * 2;
  } else return balance;
};
