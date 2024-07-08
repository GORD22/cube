import { useUserState } from "@/shared/model/state/user.state";
import styles from "./styles.module.scss";
import { Button } from "@/shared/kit/Button/Button";
import { useState } from "react";
import { Modal } from "@/shared/ui/components/Modal";
import { Input } from "@/shared/kit/Input";
import { useForm } from "react-hook-form";
import { ILoginData } from "@/shared/api/userAPI/user.types";

export const Header = () => {
  const { isAuth, balance, login } = useUserState();
  const [isShowAuthModal, setIsShowAuthModal] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginData>({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setError("");
      await login(data);
      setIsShowAuthModal(false);
    } catch (error) {
      const err = error as Error;
      setError(err.message);
      reset();
    }
  });

  return (
    <div className={styles.header}>
      <span className={styles.title}>Test Game</span>
      <div className={styles.content}>
        {!isAuth ? (
          <>
            <Button onClick={() => setIsShowAuthModal(true)}>Вход</Button>
            <Button>Регистрация</Button>
          </>
        ) : (
          <>
            <span className={styles.balance}>{balance} (TND)</span>
          </>
        )}
      </div>
      {isShowAuthModal && (
        <Modal
          onClose={() => setIsShowAuthModal(false)}
          className={styles.modal}
        >
          <Input
            name="login"
            control={control}
            placeholder="Login"
            className={styles.input}
            rules={{
              required: { value: true, message: "Укажите Login" },
              pattern: {
                value: /^[a-z][-a-z_]*$/i,
                message: "Логин не должен содержать цифры",
              },
            }}
            error={errors.login}
          />
          <Input
            name="password"
            type="password"
            control={control}
            placeholder="Password"
            className={styles.input}
            rules={{
              required: { value: true, message: "Укажите Password" },
            }}
            error={errors.password}
          />
          {error && <p className={styles.error}>{error}</p>}
          <Button className={styles.subBtn} onClick={onSubmit}>
            Войти
          </Button>
        </Modal>
      )}
    </div>
  );
};
