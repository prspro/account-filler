import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface IUseFieldList {
  dataList: {
    id: string;
    label: string;
  }[];
}

function useFieldList(): IUseFieldList {
  const dataList = useSelector((state: RootState) => state.data.fieldList)
    .filter((entry) => entry.isShown)
    .map((entry) => {
      return { id: entry.id, label: entry.label };
    });

  return {
    dataList,
  };
}

export default useFieldList;
