import { ComponentPropsWithoutRef, FC, memo } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

type TProps = {
  variant?: "blue" | "orange" | "transparent";
  active?: boolean
};

type TButtonProps = ComponentPropsWithoutRef<"button"> & TProps;

export const Button: FC<TButtonProps> = memo(
  ({ children, variant = "blue", active, className, ...props }) => {
    return (
      <button
        {...props}
        data-active={active}
        className={cn(styles.button, styles[variant], className)}
      >
        {children}
      </button>
    );
  }
);
