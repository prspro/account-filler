import useManipulateData from "../../hooks/useManipulateData";

interface IUseFields {
  handleDownloadData: () => void;
  handleRefreshAllData: () => void;
}

const useFields = ():IUseFields => {
  const { handleDownloadData, handleRefreshAllData } = useManipulateData();
  return { handleDownloadData, handleRefreshAllData };
};

export default useFields;
