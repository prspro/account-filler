import { useSelector, useDispatch } from "react-redux";
import {toggleIsDataGenerated} from "../../store/slices/appSlice";
import type { RootState } from "../../store";

interface IUseStartButton {
    toggleDataGenerated: () => void
}

const useStartButton = ():IUseStartButton => {

    const dispatch = useDispatch();

    const toggleDataGenerated = () => {
        dispatch(toggleIsDataGenerated());
    }

  return {
    toggleDataGenerated,
  }
}

export default useStartButton