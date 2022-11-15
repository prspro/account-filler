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
  const { isMenuShown, dataList, handleChange } = useMenu();

  return (
    <div className={classNames("menu", className, { shown: isMenuShown })}>
      <Burger className="menu__burger"/>
      <span className="menu__title">Options</span>
      <form className="menu__form" action="/">
        <ul className="menu__list">
          {dataList.map(entry => (
            <li key={entry.id} className="menu__item">
              <label className="menu__checkbox-wrap">
                <span>
                  {entry.label}
                </span>
                <input type="checkbox" defaultChecked={entry.isShown} onChange={(e) => {handleChange(e, entry.id)}}/>
                <div className="menu__checkmark"></div>
              </label>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Menu;
