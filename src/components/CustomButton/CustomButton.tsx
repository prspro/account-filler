import React, {FC} from "react";
import "./customButton.sass";
import classNames from "classnames";

interface ICustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[];
  className?: string;
  onClick: () => void;
  // iconAnimation?: "rotate" | "scale";
  // text: string;
  // iconID?: string;
}

const CustomButton: FC<ICustomButtonProps> = ({
  className,
  // iconAnimation,
  // text,
  // iconID,
  children,
  onClick,
}) => {
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
