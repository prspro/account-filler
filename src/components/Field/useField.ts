import { useState } from "react";

// interface IUseFieldArg {
//   generationFunction: () => string;
// }

interface IUseField {
  fieldValue: string;
  refreshFieldValue: () => void;
}

const useField = (generationFunction: () => string): IUseField => {
  const [fieldValue, setFieldValue] = useState(generationFunction());

  const refreshFieldValue = () => {
    setFieldValue(generationFunction());
  };

  return { fieldValue, refreshFieldValue };
};

export default useField;
