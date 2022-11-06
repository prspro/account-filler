import useField from "./useField";
import "./field.sass";
import {ReactComponent as RefreshIcon} from "../../img/svg/refresh-svgrepo-com.svg";

interface IFieldArgs {
  placeholder: string;
  generationFunction: () => string;
}

const Field = ({ placeholder, generationFunction }: IFieldArgs) => {
  const { fieldValue, refreshFieldValue } = useField(generationFunction);

  return (
    <div className="field">
      <span className="field__name">{placeholder}:</span>
      <div className="field__value-wrap">
        <p className="field__value">{fieldValue}</p>
      </div>
      <button className="field__refresh" onClick={refreshFieldValue}>
        <RefreshIcon className="svg-icon refresh" />
      </button>
    </div>
  );
};

export default Field;
