// const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const chars =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passwordLength = 32;

interface IUseDataFill {
  generatePassword: () => string;
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

  return {
    generatePassword,
  };
}

export default useDataFill;
