import React from "react";
///
import { useSelector } from "react-redux";
import { RootState } from "../store";

const useDownloadData = () => {
  const stateData = useSelector((state: RootState) => state.data.fieldList);

  const printStateData = () => {
    const longestLabel = Math.max(...stateData.map(entry => entry.label.length));
    const modifiedStateData = stateData.map(entry => {
        const firstColumn = entry.label + " ".repeat(longestLabel - entry.label.length);
        return `${firstColumn}: ${entry.value}\r\n`;
    });
    return modifiedStateData.join("");
  };

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

  return { handleDownloadData };
};

export default useDownloadData;
