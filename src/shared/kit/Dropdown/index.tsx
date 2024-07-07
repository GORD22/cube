import { FC, useMemo, useState } from "react";
import cn from "classnames";
import { LazySvg } from "@/shared/ui/components/SvgLoader";
import styles from "./styles.module.scss";
import { DropdownContent } from "../DropdownContent";
import { TOption } from "@/shared/types";

type TProps = {
  options: TOption[];
  defaultValue?: TOption;
  onSelect: (value: number) => void;
};

export const Dropdown: FC<TProps> = ({ options, defaultValue, onSelect }) => {
  const [currentValue, setCurrentValue] = useState<TOption | undefined>(
    defaultValue
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const filterdOptions = useMemo(() => {
    return options.filter((option) => option.value !== currentValue?.value);
  }, [currentValue?.value, options]);

  const handleSelect = (option: TOption) => {
    setCurrentValue(option);
    onSelect(Number(option.value));
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={cn("btn-reset", styles.trigger)}
        onClick={() => setIsOpen(true)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        <span className={styles.text}>{currentValue?.label}</span>
        <LazySvg name="arrow-dropdown" className={styles.svg} />
      </button>
      <DropdownContent
        options={filterdOptions}
        onSelect={handleSelect}
        open={isOpen}
      />
    </div>
  );
};
