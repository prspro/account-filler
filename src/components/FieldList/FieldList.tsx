import Field from "../Field/Field";
import useFieldList from "./useFieldList";
import { FC } from "react";
import "./fieldList.sass";

const FieldList: FC = () => {
  const { dataList } = useFieldList();

  return (
    <ul className="field-list">
      {dataList.map((fieldItem) => (
        <li key={fieldItem.id} className="field-list__item">
          <Field
            label={fieldItem.label}
            id={fieldItem.id}
          ></Field>
        </li>
      ))}
    </ul>
  );
};

export default FieldList;
