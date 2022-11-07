import { faker } from "@faker-js/faker";
// const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const chars =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passwordLength = 32;


interface IUseDataFill {
  generatePassword: () => string;
  generateLogin: () => string;
}

function useDataFill(): IUseDataFill {
  const generatePassword = (): string => {
    let password = "";
    for (var i = 0; i <= passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
  };

  const generateLogin = (): string => {
    return faker.word.adjective()+faker.word.noun();
  }

  // console.log(faker.name.fullName());

  return {
    generatePassword,
    generateLogin,
  };
}

export default useDataFill;
