import useDataFill from "../../hooks/useDataFill";

interface IUseFieldList {
  dataFillList: { id: string; label: string; generationFunction: () => string }[];
}

function useFieldList(): IUseFieldList {
  const { dataFillList } = useDataFill();

  return {
    dataFillList,
  };
}

export default useFieldList;
