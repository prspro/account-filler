import useDataFill from "../../hooks/useDataFill";

interface IUseFieldList {
  generatePassword: () => string;
  generateLogin: () => string;
}

function useFieldList(): IUseFieldList {
  const { generatePassword, generateLogin } = useDataFill();


  return { generatePassword, generateLogin };
}

export default useFieldList;
