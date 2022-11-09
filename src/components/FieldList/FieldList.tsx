import Field from "../Field/Field";
import useFieldList from "./useFieldList";
import "./fieldList.sass";

function FieldList() {
  const { dataFillList } = useFieldList();

  console.log(dataFillList);
  

  return (
    <ul className="field-list">
      {dataFillList.map((fieldItem) => (
        <li key={fieldItem.id} className="field-list__item">
          <Field
            placeholder={fieldItem.label}
            id={fieldItem.id}
            refreshFunction={fieldItem.generationFunction}
          ></Field>
        </li>
      ))}
    </ul>
  );
}

export default FieldList;
