import { MainPage } from "@/pages/main";
import "./styles/app.scss";
import { Header } from "@/widgets/header/Header";
import { useEffect } from "react";
import { useUserState } from "@/shared/model/state/user.state";
import Cookies from "universal-cookie";

export const App = () => {
  const { setIsAuth, setUser } = useUserState();

  useEffect(() => { 
    const initApp = () => {
      const cookies = new Cookies();
      if (cookies.get("userData")) {
        setIsAuth(true);
        setUser(cookies.get("userData"));
      } else {
        setIsAuth(false);
      }
    };

    initApp();
  }, [setIsAuth, setUser]);

  return (
    <div className="container">
      <Header />
      <MainPage />
    </div>
  );
};
