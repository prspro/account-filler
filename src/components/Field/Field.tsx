import useField from "./useField";
import SVGicon from "../SVGicon/SVGicon";
import "./field.sass";
import React, { FC } from "react";

interface IFieldProps {
  placeholder: string;
  id: string;
  refreshFunction: () => string;
}

const Field: FC<IFieldProps> = ({ id, refreshFunction, placeholder }) => {
  const { fieldValue, handleRefresh, handleCopy } = useField({
    id,
    placeholder,
    refreshFunction,
  });

  return (
    <div className="field">
      <div className="field__row">
        <span className="field__name">{placeholder}:</span>
        <button className="field__refresh" onClick={handleRefresh}>
          {/* <RefreshIcon className="svg-icon refresh" /> */}
          <SVGicon id={"refresh"} className={"field__icon"} />
        </button>
      </div>
      <div className="field__row">
        <div className="field__value-wrap">
          <p className="field__value">{fieldValue}</p>
        </div>
        <button className="field__copy" onClick={handleCopy}>
          <SVGicon id={"copy"} className={"field__icon"} />
        </button>
      </div>
    </div>
  );
};

export default Field;
