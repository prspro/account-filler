import React from "react";
import "./customButton.sass";
import classNames from "classnames";

interface ICustomButtonArg extends React.HTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[];
  className?: string;
  onClick: () => void;
  // iconAnimation?: "rotate" | "scale";
  // text: string;
  // iconID?: string;
}

const CustomButton: React.FunctionComponent<ICustomButtonArg> = ({
  className,
  // iconAnimation,
  // text,
  // iconID,
  children,
  onClick,
}: ICustomButtonArg) => {
  return (
    <button
      className={classNames("custom-btn", className
      // , {
      //   [`custom-btn--icon-${iconAnimation}`]: iconAnimation !== undefined,
      // }
      )}
      onClick={onClick}
    >
      <div className="custom-btn__inner-wrap">{children}</div>
    </button>
  );
};

export default CustomButton;
