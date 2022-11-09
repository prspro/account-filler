import { useDispatch } from "react-redux";
import { toggleIsDataGenerated } from "../../store/slices/appSlice";
import { addFieldItem } from "../../store/slices/dataSlice";
import useDataFill from "../../hooks/useDataFill";

interface IUseStartButton {
  handleStart: () => void;
}

const useStartButton = (): IUseStartButton => {
  const { dataFillList } = useDataFill();

  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(toggleIsDataGenerated());
    dataFillList.forEach((entry) => {
      dispatch(
        addFieldItem({ id: entry.id, label: entry.label, value: entry.generationFunction() })
      );
    });
  };

  return {
    handleStart,
  };
};

export default useStartButton;
