import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateFieldisShown } from "../../store/slices/dataSlice";

interface IUseMenu {
  isMenuShown: boolean;
  dataList: {
    id: string;
    label: string;
    value: string;
    isShown: boolean;
  }[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}

const useMenu = (): IUseMenu => {
  const isMenuShown = useSelector((state: RootState) => state.app.isMenuShown);
  const dataList = useSelector((state: RootState) => state.data.fieldList);

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {

    console.log(e.target.checked);
    

    dispatch(updateFieldisShown({id: id, isShown: e.target.checked}))
  }

  return {
    isMenuShown,
    dataList,
    handleChange,
  };
};

export default useMenu;
