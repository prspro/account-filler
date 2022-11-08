// import useField from "./useField";
import "./field.sass";
import {ReactComponent as RefreshIcon} from "../../img/svg/refresh-svgrepo-com.svg";

interface IFieldArgs {
  placeholder: string;
  fieldValue: string;
  refreshFunction: () => void;
}

const Field = ({ placeholder, refreshFunction, fieldValue }: IFieldArgs) => {

  return (
    <div className="field">
      <span className="field__name">{placeholder}:</span>
      <div className="field__value-wrap">
        <p className="field__value">{fieldValue}</p>
      </div>
      <button className="field__refresh" onClick={refreshFunction}>
        <RefreshIcon className="svg-icon refresh" />
      </button>
    </div>
  );
};

export default Field;
