import { useState } from "react";
import copyToClipboard from "copy-to-clipboard";

interface IUseCopy {
  isCopied: boolean;
  handleCopy: () => void;
}

const useCopy = (value: string): IUseCopy => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (isCopied) return;
    copyToClipboard(value);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1e3);
  };

  return { isCopied, handleCopy };
};

export default useCopy;
