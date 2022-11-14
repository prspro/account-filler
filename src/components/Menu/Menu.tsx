import { FC } from "react";
import classNames from "classnames";
import useMenu from "./useMenu";
import Burger from "../Burger/Burger";
///
import "./menu.sass";

interface IMenuProps {
  className?: string;
}

const Menu: FC<IMenuProps> = ({ className }) => {
  const { isMenuShown } = useMenu();

  return (
    <div className={classNames("menu", className, { shown: isMenuShown })}>
      <Burger className="menu__burger"/>
      <span>
        Lorem, ipsum.
      </span>
    </div>
  );
};

export default Menu;
