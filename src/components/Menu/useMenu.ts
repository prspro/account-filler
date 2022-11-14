import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface IUseMenu {
  isMenuShown: boolean;
}

const useMenu = (): IUseMenu => {
  const isMenuShown = useSelector((state: RootState) => state.app.isMenuShown);

  return {
    isMenuShown,
  };
};

export default useMenu;
