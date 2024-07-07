import { useUserState } from "@/shared/model/state/user.state";
import styles from "./styles.module.scss";

export const Header = () => {
  const { balance } = useUserState();

  return (
    <div className={styles.header}>
      <span className={styles.title}>Test Game</span>
      <span className={styles.balance}>{balance} (TND)</span>
    </div>
  );
};
