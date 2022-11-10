import { useDispatch } from "react-redux";
import { toggleIsDataGenerated } from "../../store/slices/appSlice";

interface IUseStartButton {
  handleStart: () => void;
}

const useStartButton = (): IUseStartButton => {
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(toggleIsDataGenerated());
  };

  return {
    handleStart,
  };
};

export default useStartButton;
