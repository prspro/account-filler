import classNames from 'classnames';
import "./lineList.sass";

interface ILineList {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

interface ILineItem {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
}

const LineList = ({children, className}: ILineList) => {
  return (
    <ul className={classNames("line-list", className)}>
      {children}
    </ul>
  )
}

const LineItem = ({children, className}: ILineItem) => {
  return (
    <li className={classNames("line-list__item", className)}>
      {children}
    </li>
  )
}

export {LineList, LineItem}