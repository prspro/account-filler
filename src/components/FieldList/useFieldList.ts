import useManipulateData from "../../hooks/useManipulateData";

interface IUseFieldList {
  dataFillList: { id: string; label: string; generationFunction: () => string }[];
}

function useFieldList(): IUseFieldList {
  const { dataFillList } = useManipulateData();

  return {
    dataFillList,
  };
}

export default useFieldList;
