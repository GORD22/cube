import { MainPage } from "@/pages/main";
import "./styles/app.scss";
import { Header } from "@/widgets/header/Header";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <MainPage />
    </div>
  );
};
