import { FC, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import { Button } from "@/shared/kit/Button/Button";
import { DropdownContent } from "@/shared/kit/DropdownContent";
import { TBettingVariant, TOption } from "@/shared/types";

type TProps = {
  options: TOption[];
  bettingVariant: TBettingVariant;
  setBettingVariant: (value: string) => void;
};

export const SpecificNumber: FC<TProps> = ({
  options,
  bettingVariant,
  setBettingVariant,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<TOption>(options[0]);

  const filterdOptions = useMemo(() => {
    return options.filter((option) => option.value !== currentValue?.value);
  }, [currentValue?.value, options]);

  const onClick = (option: TOption) => {
    setCurrentValue(option);
    setBettingVariant(String(option.label));
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.trigger}
        onClick={() => setIsOpen(true)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        active={
          bettingVariant === "1" ||
          bettingVariant === "2" ||
          bettingVariant === "3" ||
          bettingVariant === "4" ||
          bettingVariant === "5" ||
          bettingVariant === "6"
        }
      >
        <span>Конкретное число</span>
        <span className={styles.number}>{currentValue?.label}</span>
      </Button>
      <DropdownContent
        options={filterdOptions}
        open={isOpen}
        onSelect={onClick}
      />
    </div>
  );
};
