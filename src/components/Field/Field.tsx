import useField from "./useField";
import SVGicon from "../SVGicon/SVGicon";
import "./field.sass";
import React, { FC } from "react";

interface IFieldProps {
  label: string;
  id: string;
}

const Field: FC<IFieldProps> = ({ id, label }) => {
  const { fieldValue, handleRefresh, handleCopy, isCopied } = useField({
    id,
  });

  return (
    <div className="field">
      <div className="field__row">
        <span className="field__name">{label}:</span>
        <button className="field__refresh" onClick={handleRefresh}>
          <SVGicon id={"refresh"} className={"field__icon"} />
        </button>
      </div>
      <div className="field__row">
        <div className="field__value-wrap">
          <p className="field__value">{isCopied ? "Copied!" : fieldValue}</p>
        </div>
        <button className="field__copy" onClick={handleCopy}>
          <SVGicon id={"copy"} className={"field__icon"} />
        </button>
      </div>
    </div>
  );
};

export default Field;
