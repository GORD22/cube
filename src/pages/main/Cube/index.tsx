import { FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

type TProps = {
  result: number;
  toggleCubeRoll: boolean
};

export const Cube: FC<TProps> = ({ result, toggleCubeRoll }) => {

  return (
    <div className={styles.cubeWrapper}>
      <div
        data-side={result}
        className={cn(styles.cube, toggleCubeRoll && styles.reRoll)}
      >
        <div className={cn(styles.side, styles.side1)}>
          <span className={cn(styles.dot, styles.dot1)} />
        </div>
        <div className={cn(styles.side, styles.side2)}>
          <span className={cn(styles.dot, styles.dot1)} />
          <span className={cn(styles.dot, styles.dot2)} />
        </div>
        <div className={cn(styles.side, styles.side3)}>
          <span className={cn(styles.dot, styles.dot1)} />
          <span className={cn(styles.dot, styles.dot2)} />
          <span className={cn(styles.dot, styles.dot3)} />
        </div>
        <div className={cn(styles.side, styles.side4)}>
          <span className={cn(styles.dot, styles.dot1)} />
          <span className={cn(styles.dot, styles.dot2)} />
          <span className={cn(styles.dot, styles.dot3)} />
          <span className={cn(styles.dot, styles.dot4)} />
        </div>
        <div className={cn(styles.side, styles.side5)}>
          <span className={cn(styles.dot, styles.dot1)} />
          <span className={cn(styles.dot, styles.dot2)} />
          <span className={cn(styles.dot, styles.dot3)} />
          <span className={cn(styles.dot, styles.dot4)} />
          <span className={cn(styles.dot, styles.dot5)} />
        </div>
        <div className={cn(styles.side, styles.side6)}>
          <span className={cn(styles.dot, styles.dot1)} />
          <span className={cn(styles.dot, styles.dot2)} />
          <span className={cn(styles.dot, styles.dot3)} />
          <span className={cn(styles.dot, styles.dot4)} />
          <span className={cn(styles.dot, styles.dot5)} />
          <span className={cn(styles.dot, styles.dot6)} />
        </div>
      </div>
    </div>
  );
};
