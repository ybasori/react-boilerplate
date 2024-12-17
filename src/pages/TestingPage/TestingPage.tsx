import React from "react";
import style from "./TestingPage.module.scss";

const TestingPage: React.FC = () => {
  return (
    <div className={style["container"]}>
      TestingPage {import.meta?.env.VITE_APP_API_KEY ?? ""}
    </div>
  );
};

export default TestingPage;
