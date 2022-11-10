import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateFieldItem, addFieldItem } from "../../store/slices/dataSlice";
///
import { useEffect } from "react";

interface IUseFieldArg {
  id: string;
  placeholder: string;
  refreshFunction: () => string;
}

interface IUseField {
  fieldValue: string;
  handleRefresh: () => void;
}

const useField = ({ id, placeholder, refreshFunction }: IUseFieldArg): IUseField => {
  const fieldValue =
    useSelector((state: RootState) => state.data.fieldList).find(
      (entry) => entry.id === id
    )?.value || "";

  const isFieldListShown = useSelector((state: RootState) => state.app.isDataGenerated);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addFieldItem({ id: id, label: placeholder, value: refreshFunction() }));
    // dispatch(updateFieldItem({ id: id, value: refreshFunction() }));
  }, [])

  const handleRefresh = () => {
    dispatch(updateFieldItem({ id: id, value: refreshFunction() }));
  };

  return { fieldValue, handleRefresh };
};

export default useField;
