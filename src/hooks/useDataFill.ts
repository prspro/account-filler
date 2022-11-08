import { faker } from "@faker-js/faker";
// const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passwordLength = 32;

interface IUseDataFill {
  login: () => string;
  password: () => string;
  firstName: () => string;
  lastName: () => string;
  email: () => string;
  dateOfBirth: () => string;
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

  // console.log(faker.name.fullName());

  return {
    password,
    login,
    firstName,
    lastName,
    email,
    dateOfBirth,
  };
}

export default useDataFill;
