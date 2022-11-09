import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateFieldItem } from "../../store/slices/dataSlice";

interface IUseFieldArg {
  id: string;
  refreshFunction: () => string;
}

interface IUseField {
  fieldValue: string;
  handleRefresh: () => void;
}

const useField = ({ id, refreshFunction }: IUseFieldArg): IUseField => {
  const fieldValue =
    useSelector((state: RootState) => state.data.fieldList).find(
      (entry) => entry.id === id
    )?.value || "";
  
    const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(updateFieldItem({id: id, value: refreshFunction()}))
  };

  return { fieldValue, handleRefresh };
};

export default useField;
