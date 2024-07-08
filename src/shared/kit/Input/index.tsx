import styles from "./styles.module.scss";
import cn from "classnames";
import { HTMLInputTypeAttribute } from "react";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

interface TProps<T extends FieldValues> extends UseControllerProps<T> {
  type?: HTMLInputTypeAttribute;
  className?: CSSModuleClasses[string];
  placeholder?: string;
  error: FieldError | undefined;
}

export const Input = <T extends FieldValues>({
  className,
  control,
  rules,
  error,
  name,
  ...props
}: TProps<T>) => {
  return (
    <div className={styles.wrapper}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <input
            {...field}
            {...props}
            className={cn(styles.input, error && styles.error, className)}
          />
        )}
      />
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
};
