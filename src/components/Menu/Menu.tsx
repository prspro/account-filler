import { FC } from "react";
import classNames from "classnames";
import useMenu from "./useMenu";
///
import "./menu.sass";

interface IMenuProps {
  className?: string;
}

const Menu: FC<IMenuProps> = ({ className }) => {
  const { isMenuShown } = useMenu();

  return (
    <div className={classNames("menu", className, { shown: isMenuShown })}>
      Menu
    </div>
  );
};

export default Menu;
