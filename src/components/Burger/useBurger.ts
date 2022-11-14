import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { toggleMenu, toggleOverlay } from "../../store/slices/appSlice";

interface IUseBurger {
  isMenuShown: boolean;
  handleClick: () => void;
}

const useBurger = (): IUseBurger => {
  const isMenuShown = useSelector((state: RootState) => state.app.isMenuShown);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenu());
    dispatch(toggleOverlay());
    document.getElementsByTagName("BODY")[0].classList.toggle("no-scrollable");
  };

  return { isMenuShown, handleClick };
};

export default useBurger;
