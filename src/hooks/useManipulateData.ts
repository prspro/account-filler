import { faker } from "@faker-js/faker";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { updateFieldValue } from "../store/slices/dataSlice";

// const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passwordLength = 32;

interface IUseDataFill {
  dataFillList: {
    id: string;
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

  const secretQuestion = () => {
    return `${faker.word.adjective()} ${faker.word.noun()}`;
  };
  const secretAnswer = () => {
    return `${faker.word.adverb()} ${faker.word.adjective()} ${faker.word.noun()}`;
  };

  const dateOfBirth = () => {
    const dateValue = faker.date.birthdate({ min: 22, max: 35, mode: "age" });
    return `${
      dateValue.getDate() < 10 ? "0" + dateValue.getDate() : dateValue.getDate()
    }.${
      dateValue.getMonth() + 1 < 10
        ? "0" + (dateValue.getMonth() + 1)
        : dateValue.getMonth() + 1
    }.${dateValue.getFullYear()}`;
  };

  const dataFillList = [
    {
      id: "firstName",
      generationFunction: firstName,
    },
    {
      id: "lastName",
      generationFunction: lastName,
    },
    {
      id: "dateOfBirth",
      generationFunction: dateOfBirth,
    },
    {
      id: "login",
      generationFunction: login,
    },
    {
      id: "password",
      generationFunction: password,
    },
    {
      id: "email",
      generationFunction: email,
    },
    {
      id: "secretQuestion",
      generationFunction: secretQuestion,
    },
    {
      id: "secretAnswer",
      generationFunction: secretAnswer,
    },
  ];

  const stateData = useSelector((state: RootState) => state.data.fieldList);

  const printStateData = () => {

    const shownData = stateData.filter(entry => entry.isShown);

    const longestLabel = Math.max(
      ...shownData.map((entry) => entry.label.length)
    );
    const modifiedStateData = shownData.map((entry) => {
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
    element.download = "accountdata.txt";
    document.body.appendChild(element);
    element.click();
    element.remove();
  };

  const handleRefreshAllData = () => {
    stateData.forEach((entry) =>
      dispatch(
        updateFieldValue({
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
