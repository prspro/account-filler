import React from "react";
import SVGicon from "../SVGicon/SVGicon";
import "./customButton.sass";

interface ICustomButtonArg extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  text: string;
  iconID?: string;
}

const CustomButton: React.FunctionComponent<ICustomButtonArg> = ({
  text,
  iconID,
  onClick,
}: ICustomButtonArg) => {
  return (
    <button className="custom-btn" onClick={onClick}>
      <div className="custom-btn__inner-wrap">
        <span className="custom-btn__txt">{text}</span>
        {iconID && <SVGicon id={iconID} className="custom-btn__icon" />}
      </div>
    </button>
  );
};

export default CustomButton;
