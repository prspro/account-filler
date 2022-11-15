import useStartButton from "./useStartButton";
import "./startButton.sass";
import SVGicon from "../SVGicon/SVGicon";
import { FC } from "react";

interface IStartButtonProps {
  placeholder: string;
}

const StartButton: FC<IStartButtonProps> = ({ placeholder }) => {
  const { handleStart } = useStartButton();

  return (
    <button className="start-btn" onClick={handleStart}>
      <SVGicon id={"refresh"} className="start-btn__icon" />
      <p className="start-btn__text">{placeholder}</p>
    </button>
  );
};

export default StartButton;
