import useStartButton from "./useStartButton";
import { ReactComponent as RefreshIcon } from "../../img/svg/refresh-svgrepo-com.svg";
import "./startButton.sass";
import React from "react";

interface IStartButtonArg {
  placeholder: string;
}

const StartButton = ({ placeholder }: IStartButtonArg) => {
  const { handleStart } = useStartButton();

  return (
    <button className="start-btn" onClick={handleStart}>
      <RefreshIcon className="start-btn__icon svg-icon refresh" />
      <p className="start-btn__text">{placeholder}</p>
    </button>
  );
};

export default StartButton;
