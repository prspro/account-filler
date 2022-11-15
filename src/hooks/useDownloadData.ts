import { useSelector } from "react-redux";
import { RootState } from "../store";

interface IUseDownloadData {
  handleDownloadData: () => void;
}

const useDownloadData = (): IUseDownloadData => {
  const stateData = useSelector((state: RootState) => state.data.fieldList);

  const printStateData = () => {
    const shownData = stateData.filter((entry) => entry.isShown);
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

  return { handleDownloadData };
};

export default useDownloadData;
