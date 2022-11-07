import Field from "../Field/Field";
import useFieldList from "./useFieldList";
import "./fieldList.sass";
import React from "react";

function FieldList() {
  const { generatePassword, generateLogin } =
    useFieldList();

  return (
    <ul className="field-list">
      <li className="field-list__item">
        <Field placeholder={"Login"} generationFunction={generateLogin} />
      </li>
      <li className="field-list__item">
        <Field placeholder={"Password"} generationFunction={generatePassword} />
      </li>
    </ul>
  );
}

export default FieldList;
