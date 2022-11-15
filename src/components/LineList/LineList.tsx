import classNames from "classnames";
import "./lineList.sass";
import React, { ReactNode, FC } from "react";

interface ILineListProps {
  className?: string;
  children: ReactNode;
}

interface ILineItemProps {
  className?: string;
  children: ReactNode;
}

const LineList: FC<ILineListProps> = ({ children, className }) => {
  return (
    <div>
      <ul className={classNames("line-list", className)}>{children}</ul>
    </div>
  );
};

const LineItem: FC<ILineItemProps> = ({ children, className }) => {
  return (
    <li className={classNames("line-list__item", className)}>{children}</li>
  );
};

export { LineList, LineItem };
