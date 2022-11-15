import Field from "../Field/Field";
import useFieldList from "./useFieldList";
import { FC } from "react";
import "./fieldList.sass";
import classNames from "classnames";

interface IFieldListProps {
  className?: string;
}

const FieldList: FC<IFieldListProps> = ({className}) => {
  const { dataList } = useFieldList();

  return (
    <ul className={classNames("field-list", className)} >
      {dataList.map((fieldItem) => (
        <li key={fieldItem.id} className="field-list__item">
          <Field label={fieldItem.label} id={fieldItem.id}></Field>
        </li>
      ))}
    </ul>
  );
};

export default FieldList;
