import useStartButton from "./useStartButton";
import { ReactComponent as RefreshIcon } from "../../img/svg/refresh-svgrepo-com.svg";
import "./startButton.sass";
import React from "react";

interface IStartButtonArg {
  children: React.ReactNode;
}

const StartButton = ({ children }: IStartButtonArg) => {
  const { toggleDataGenerated } = useStartButton();

  return (
    <button className="start-btn" onClick={toggleDataGenerated}>
      <RefreshIcon className="start-btn__icon svg-icon refresh" />
      <p className="start-btn__text">{children}</p>
    </button>
  );
};

export default StartButton;
