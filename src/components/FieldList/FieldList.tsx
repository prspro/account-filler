import Field from "../Field/Field";
import useFieldList from "./useFieldList";
import "./fieldList.sass";
import React from "react";

function FieldList() {
  const {
    handlePassword,
    handleLogin,
    handleFirstName,
    handleLastName,
    handleEmail,
    handleDateOfBirth,
    paswordValue,
    loginValue,
    firstNameValue,
    lastNameValue,
    emailValue,
    dateOfBirthValue,
  } = useFieldList();

  return (
    <ul className="field-list">
      <li className="field-list__item">
        <Field placeholder={"Login"} refreshFunction={handleLogin} fieldValue={loginValue} />
      </li>
      <li className="field-list__item">
        <Field placeholder={"Password"} refreshFunction={handlePassword} fieldValue={paswordValue} />
      </li>
      <li className="field-list__item">
        <Field placeholder={"First name"} refreshFunction={handleFirstName} fieldValue={firstNameValue} />
      </li>
      <li className="field-list__item">
        <Field placeholder={"Last name"} refreshFunction={handleLastName} fieldValue={lastNameValue} />
      </li>
      <li className="field-list__item">
        <Field placeholder={"Email"} refreshFunction={handleEmail} fieldValue={emailValue} />
      </li>
      <li className="field-list__item">
        <Field placeholder={"Date of birth"} refreshFunction={handleDateOfBirth} fieldValue={dateOfBirthValue} />
      </li>
    </ul>
  );
}

export default FieldList;
