import React, { FC } from "react";
import classNames from "classnames";
import useBurger from "./useBurger";
import "./burger.sass";

interface IBurgerProps {
  className?: string;
}

const Burger: FC<IBurgerProps> = ({ className }) => {
  const { isMenuShown, handleClick } = useBurger();

  return (
    <button
      onClick={handleClick}
      className={classNames("burger", className, { active: isMenuShown })}
    >
      <div className="burger__bar"></div>
      <div className="burger__bar"></div>
      <div className="burger__bar"></div>
    </button>
  );
};

export default Burger;
