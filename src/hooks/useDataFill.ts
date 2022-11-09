import { faker } from "@faker-js/faker";
// const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passwordLength = 32;

interface IUseDataFill {
  dataFillList: {
    id: string;
    label: string;
    generationFunction: () => string;
  }[];
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
    { id: "login", label: "Login", generationFunction: login },
    { id: "password", label: "Password", generationFunction: password },
    { id: "firstName", label: "First name", generationFunction: firstName },
    { id: "lastName", label: "Last name", generationFunction: lastName },
    { id: "email", label: "Email", generationFunction: email },
    {
      id: "dateOfBirth",
      label: "Date of birth",
      generationFunction: dateOfBirth,
    },
  ];

  return {
    dataFillList,
  };
}

export default useDataFill;
