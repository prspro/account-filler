import { useSelector, useDispatch } from "react-redux";
import {
  refreshDateOfBirth,
  refreshEmail,
  refreshFirstName,
  refreshLastName,
  refreshLogin,
  refreshPassword,
} from "../../store/slices/dataSlice";
import { RootState } from "../../store";

import useDataFill from "../../hooks/useDataFill";

interface IUseFieldList {
  handlePassword: () => void;
  handleLogin: () => void;
  handleFirstName: () => void;
  handleLastName: () => void;
  handleEmail: () => void;
  handleDateOfBirth: () => void;
  paswordValue: string;
  loginValue: string;
  firstNameValue: string;
  lastNameValue: string;
  emailValue: string;
  dateOfBirthValue: string;
}

function useFieldList(): IUseFieldList {
  const { password, login, firstName, lastName, email, dateOfBirth } =
    useDataFill();

  const dispatch = useDispatch();

  const handlePassword = () => {
    dispatch(refreshPassword(password()));
  };

  const handleLogin = () => {
    dispatch(refreshLogin(login()));
  };

  const handleFirstName = () => {
    dispatch(refreshFirstName(firstName()));
  };

  const handleLastName = () => {
    dispatch(refreshLastName(lastName()));
  };

  const handleEmail = () => {
    dispatch(refreshEmail(email()));
  };

  const handleDateOfBirth = () => {
    dispatch(refreshDateOfBirth(dateOfBirth()));
  };

  const paswordValue = useSelector((state: RootState) => state.data.password),
    loginValue = useSelector((state: RootState) => state.data.login),
    firstNameValue = useSelector((state: RootState) => state.data.firstName),
    lastNameValue = useSelector((state: RootState) => state.data.lastName),
    emailValue = useSelector((state: RootState) => state.data.email),
    dateOfBirthValue = useSelector(
      (state: RootState) => state.data.dateOfBirth
    );

  return {
    handlePassword,
    handleLogin,
    handleFirstName,
    handleLastName,
    handleEmail,
    handleDateOfBirth,
    paswordValue,
    loginValue,
    firstNameValue,
    lastNameValue,
    emailValue,
    dateOfBirthValue,
  };
}

export default useFieldList;
