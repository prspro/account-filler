import useField from "./useField";
import "./field.sass";
import { ReactComponent as RefreshIcon } from "../../img/svg/refresh-svgrepo-com.svg";

interface IFieldArgs {
  placeholder: string;
  id: string;
  refreshFunction: () => string;
}

const Field = ({ id, refreshFunction, placeholder }: IFieldArgs) => {
  const { fieldValue, handleRefresh } = useField({ id, refreshFunction });

  return (
    <div className="field">
      <span className="field__name">{placeholder}:</span>
      <div className="field__value-wrap">
        <p className="field__value">{fieldValue}</p>
      </div>
      <button className="field__refresh" onClick={handleRefresh}>
        <RefreshIcon className="svg-icon refresh" />
      </button>
    </div>
  );
};

export default Field;