import { faker } from "@faker-js/faker";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { updateFieldItem } from "../store/slices/dataSlice";

// const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passwordLength = 32;

interface IUseDataFill {
  dataFillList: {
    id: string;
    label: string;
    generationFunction: () => string;
  }[];
  handleDownloadData: () => void;
  handleRefreshAllData: () => void;
}

function useDataFill(): IUseDataFill {
  const password = (): string => {
    let pw = "";
    for (var i = 0; i <= passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      pw += chars.substring(randomNumber, randomNumber + 1);
    }
    return pw;
  };

  const login = (): string => {
    return faker.word.adjective() + faker.word.noun();
  };

  const firstName = () => {
    return faker.name.firstName();
  };

  const lastName = () => {
    return faker.name.lastName();
  };

  const email = () => {
    return faker.internet.email();
  };

  const dateOfBirth = () => {
    const dateValue = faker.date.birthdate({ min: 22, max: 35, mode: "age" });
    return `${dateValue.getDate()} ${dateValue.getMonth()} ${dateValue.getFullYear()}`;
  };

  const dataFillList = [
    { id: "firstName", label: "First name", generationFunction: firstName },
    { id: "lastName", label: "Last name", generationFunction: lastName },
    {
      id: "dateOfBirth",
      label: "Date of birth",
      generationFunction: dateOfBirth,
    },
    { id: "login", label: "Login", generationFunction: login },
    { id: "password", label: "Password", generationFunction: password },
    { id: "email", label: "Email", generationFunction: email },
  ];

  const stateData = useSelector((state: RootState) => state.data.fieldList);

  const printStateData = () => {
    const longestLabel = Math.max(
      ...stateData.map((entry) => entry.label.length)
    );
    const modifiedStateData = stateData.map((entry) => {
      const firstColumn =
        entry.label + ":" + " ".repeat(longestLabel - entry.label.length);
      return `${firstColumn} ${entry.value}\r\n`;
    });
    return modifiedStateData.join("");
  };

  const dispatch = useDispatch();

  const handleDownloadData = () => {
    const element = document.createElement("a");
    const file = new Blob([printStateData()], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "data.txt";
    document.body.appendChild(element);
    element.click();
    element.remove();
  };

  const handleRefreshAllData = () => {
    stateData.forEach((entry) =>
      dispatch(
        updateFieldItem({
          id: entry.id,
          value:
            dataFillList
              .find((item) => item.id === entry.id)
              ?.generationFunction() || "",
        })
      )
    );
  };

  return {
    dataFillList,
    handleDownloadData,
    handleRefreshAllData,
  };
}

export default useDataFill;
