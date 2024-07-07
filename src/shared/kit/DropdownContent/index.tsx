import { FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { TOption } from "@/shared/types";

type TProps = {
  options: TOption[];
  open: boolean;
  onSelect: (option: TOption) => void;
};

export const DropdownContent: FC<TProps> = ({ options, open, onSelect }) => {
  return (
    <ul
      className={cn("list-reset", styles.content)}
      data-state={open ? "open" : "close"}
    >
      {options.map((option) => (
        <li
          key={option.value}
          className={styles.item}
          onClick={() => onSelect(option)}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
};
