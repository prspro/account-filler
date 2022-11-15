import React, { FC } from "react";
import "./customButton.sass";
import classNames from "classnames";

interface ICustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[];
  className?: string;
  onClick: () => void;
}

const CustomButton: FC<ICustomButtonProps> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button className={classNames("custom-btn", className)} onClick={onClick}>
      <div className="custom-btn__inner-wrap">{children}</div>
    </button>
  );
};

export default CustomButton;
