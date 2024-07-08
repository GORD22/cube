import { FC, PropsWithChildren } from "react";
import { Portal } from "../Portal";
import styles from "./styles.module.scss";
import { Button } from "@/shared/kit/Button/Button";
import { LazySvg } from "../SvgLoader";
import cn from "classnames";

type TProps = {
  className?: CSSModuleClasses[string];
  onClose: () => void;
};

export const Modal: FC<PropsWithChildren<TProps>> = ({
  children,
  className,
  onClose,
}) => {
  
  const modalClose = () => {
    onClose();
  };

  return (
    <Portal>
      <div className={styles.substrate}>
        <div className={cn(styles.modal, className)}>
          <Button
            variant="transparent"
            className={styles.closeBtn}
            onClick={modalClose}
          >
            <LazySvg name="cross" className={styles.svg} />
          </Button>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
