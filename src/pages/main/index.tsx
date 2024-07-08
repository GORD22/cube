import { Dropdown } from "@/shared/kit/Dropdown";
import { Cube } from "./Cube";
import styles from "./styles.module.scss";
import { OPTIONS, SPECIFIC_NUMBERS } from "@/shared/constants";
import { Button } from "@/shared/kit/Button/Button";
import { SpecificNumber } from "./SpecificNumber";
import { useState } from "react";
import { TBettingVariant, TMainState } from "@/shared/types";
import cn from "classnames";
import { useUserState } from "@/shared/model/state/user.state";
import { summation } from "@/shared/lib/summation";

export const MainPage = () => {
  const { isAuth, balance, setBalance } = useUserState();
  const [mainState, setMainState] = useState<TMainState>({
    result: 1,
    isRoll: false,
    bettingVariant: "",
    toggleCubeRoll: false,
    rate: 1,
    text: "Сделайте ставку",
    subText: "",
  });

  const rollCube = () => {
    const newResult = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    if (newResult === mainState.result) {
      setMainState((old) => ({ ...old, toggleCubeRoll: !old.toggleCubeRoll }));
    }
    setMainState((old) => ({ ...old, result: newResult }));
    setMainState((old) => ({ ...old, isRoll: true }));
    setBalance(balance - mainState.rate);
    const newBalance = summation(
      balance - mainState.rate,
      mainState.rate,
      mainState.bettingVariant,
      newResult
    );
    setTimeout(() => {
      setMainState((old) => ({ ...old, isRoll: false })),
        setBalance(newBalance);
      setMainState((old) => ({
        ...old,
        text: `Результат броска кубика: ${newResult}`,
      }));
      if (newBalance === balance - mainState.rate) {
        setMainState((old) => ({
          ...old,
          subText: "Повезет в следующий раз!",
        }));
      } else {
        setMainState((old) => ({
          ...old,
          subText: `Вы выиграли ${newBalance - balance + mainState.rate} TND!`,
        }));
      }
    }, 1500);
  };

  const changeSpecificNumber = (value: string) => {
    setMainState((old) => ({
      ...old,
      bettingVariant: value as TBettingVariant,
    }));
  };

  const changeRate = (value: number) => {
    setMainState((old) => ({ ...old, rate: value }));
  };

  return (
    <div className={styles.content}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          {isAuth ? mainState.text : "Войдите, чтобы продолжить"}
        </h1>
        {mainState.subText && (
          <h2 className={styles.subTitle}>{mainState.subText}</h2>
        )}
      </div>
      <div className={cn(styles.bettingBlock, !isAuth && styles.blocking)}>
        <Cube
          result={mainState.result}
          toggleCubeRoll={mainState.toggleCubeRoll}
        />
        <div className={styles.bettingForm}>
          <div>
            <span className={styles.label}>Размер ставки</span>
            <Dropdown
              options={OPTIONS}
              defaultValue={{ value: mainState.rate, label: mainState.rate }}
              onSelect={changeRate}
            />
          </div>
          <div>
            <span className={styles.label}>Варианты ставок</span>
            <div className={styles.buttonsBlock}>
              <Button
                className={cn(styles.button)}
                active={mainState.bettingVariant === "even"}
                onClick={() =>
                  setMainState((old) => ({ ...old, bettingVariant: "even" }))
                }
              >
                Четное
              </Button>
              <Button
                className={cn(styles.button)}
                active={mainState.bettingVariant === "odd"}
                onClick={() =>
                  setMainState((old) => ({ ...old, bettingVariant: "odd" }))
                }
              >
                Нечетное
              </Button>
              <Button
                className={cn(styles.button)}
                active={mainState.bettingVariant === "1-3"}
                onClick={() =>
                  setMainState((old) => ({ ...old, bettingVariant: "1-3" }))
                }
              >
                От 1 до 3
              </Button>
              <Button
                className={cn(styles.button)}
                active={mainState.bettingVariant === "4-6"}
                onClick={() =>
                  setMainState((old) => ({ ...old, bettingVariant: "4-6" }))
                }
              >
                От 4 до 6
              </Button>
              <SpecificNumber
                options={SPECIFIC_NUMBERS}
                bettingVariant={mainState.bettingVariant}
                setBettingVariant={changeSpecificNumber}
              />
            </div>
          </div>
          <Button
            variant="orange"
            onClick={rollCube}
            disabled={
              !isAuth ||
              mainState.isRoll ||
              !mainState.bettingVariant ||
              balance < mainState.rate
            }
          >
            Сделать ставку
          </Button>
        </div>
      </div>
    </div>
  );
};
