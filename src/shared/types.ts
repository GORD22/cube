export type TOption = {
  value: string | number;
  label: string | number;
};

export type TBettingVariant =
  | ""
  | "even"
  | "odd"
  | "1-3"
  | "4-6"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6";

export type TMainState = {
  result: number;
  isRoll: boolean;
  bettingVariant: TBettingVariant;
  toggleCubeRoll: boolean;
  rate: number;
};
