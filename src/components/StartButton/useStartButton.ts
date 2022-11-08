import { useDispatch } from "react-redux";
import { toggleIsDataGenerated } from "../../store/slices/appSlice";
import {
  refreshDateOfBirth,
  refreshEmail,
  refreshFirstName,
  refreshLastName,
  refreshLogin,
  refreshPassword,
} from "../../store/slices/dataSlice";

import useDataFill from "../../hooks/useDataFill";

interface IUseStartButton {
  handleStart: () => void;
}

const useStartButton = (): IUseStartButton => {
  const { password, login, firstName, lastName, email, dateOfBirth } =
    useDataFill();

  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(toggleIsDataGenerated());
    ///
    dispatch(refreshPassword(password()));
    dispatch(refreshLogin(login()));
    dispatch(refreshFirstName(firstName()));
    dispatch(refreshLastName(lastName()));
    dispatch(refreshEmail(email()));
    dispatch(refreshDateOfBirth(dateOfBirth()));
  };

  return {
    handleStart,
  };
};

export default useStartButton;
