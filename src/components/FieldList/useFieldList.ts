import { useState } from "react";
import useDataFill from "../../hooks/useDataFill";

interface IUseFieldList {
  isDataGenerated: boolean;
  toggleFieldList: () => void;
  generatePassword: () => string;
}

function useFieldList(): IUseFieldList {
  const [isDataGenerated, setIsDataGenerated] = useState<boolean>(false);
  const { generatePassword } = useDataFill();

  const toggleFieldList = () => {
    setIsDataGenerated((prev) => !prev);
  };

  return { isDataGenerated, toggleFieldList, generatePassword };
}

export default useFieldList;
