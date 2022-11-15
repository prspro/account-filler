import { useEffect } from "react";
///
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateFieldValue } from "../../store/slices/dataSlice";
///
import useCopy from "../../hooks/useCopy";
import useManipulateData from "../../hooks/useManipulateData";

interface IUseFieldProps {
  id: string;
  label: string;
}

interface IUseField {
  fieldValue: string;
  handleRefresh: () => void;
  isCopied: boolean;
  handleCopy: () => void;
}

const useField = ({ id, label }: IUseFieldProps): IUseField => {
  const fieldValue =
    useSelector((state: RootState) => state.data.fieldList).find(
      (entry) => entry.id === id
    )?.value || "";

  const { isCopied, handleCopy } = useCopy(fieldValue);
  const { refreshFucntionList } = useManipulateData();

  const refreshFunction =
    refreshFucntionList.find((entry) => entry.id === id)?.generationFunction ||
    (() => "error");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateFieldValue({ id: id, value: refreshFunction() }));
  }, []);

  const handleRefresh = () => {
    dispatch(updateFieldValue({ id: id, value: refreshFunction() }));
  };

  return { fieldValue, handleRefresh, isCopied, handleCopy };
};

export default useField;
