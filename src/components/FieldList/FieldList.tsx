import Field from "../Field/Field";
import useFieldList from "./useFieldList";
import "./fieldList.sass";
import React from "react";
import { ReactComponent as RefreshIcon } from "../../img/svg/refresh-svgrepo-com.svg";

function FieldList() {
  const { isDataGenerated, toggleFieldList, generatePassword } = useFieldList();

  return (
    <React.Fragment>
      {isDataGenerated ? (
        <ul className="field-list">
          <li className="field-list__item">
            <Field
              placeholder={"password 1"}
              generationFunction={generatePassword}
            />
          </li>
          <li className="field-list__item">
            <Field
              placeholder={"password 2"}
              generationFunction={generatePassword}
            />
          </li>
          <li className="field-list__item">
            <Field
              placeholder={"password 3"}
              generationFunction={generatePassword}
            />
          </li>
          <li className="field-list__item">
            <Field
              placeholder={"password 4"}
              generationFunction={generatePassword}
            />
          </li>
        </ul>
      ) : (
        <button className="generate-btn" onClick={toggleFieldList}>
          <RefreshIcon className="svg-icon refresh generate-btn__icon" />
          <p className="generate-btn__text">generate</p>
        </button>
      )}
    </React.Fragment>
  );
}

export default FieldList;
