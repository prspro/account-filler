import useStartButton from "./useStartButton";
import "./startButton.sass";
import SVGicon from "../SVGicon/SVGicon";
import { FC } from "react";
import classNames from "classnames";

interface IStartButtonProps {
  placeholder: string;
  className?: string;
  mode: "loading" | "waiting";
}

const StartButton: FC<IStartButtonProps> = ({
  placeholder,
  className,
  mode,
}) => {
  const { handleStart } = useStartButton();

  return (
    <button
      className={classNames("start-btn", className, {
        loading: mode === "loading",
        waiting: mode === "waiting",
      })}
      onClick={handleStart}
    >
      <SVGicon id={"refresh"} className="start-btn__icon" />
      <p className="start-btn__text">{placeholder}</p>
    </button>
  );
};

export default StartButton;
