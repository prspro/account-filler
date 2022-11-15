import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { hideOverlay, hideMenu } from "../../store/slices/appSlice";

interface IUseOverlay {
  isOverlayShown: boolean;
  handleClick: () => void;
}

const useOverlay = (): IUseOverlay => {
  const dispatch = useDispatch();
  const isOverlayShown = useSelector(
    (state: RootState) => state.app.isOverlayShown
  );
  const handleClick = () => {
    dispatch(hideOverlay());
    dispatch(hideMenu());
    document.getElementsByTagName("BODY")[0].classList.toggle("no-scrollable");
  };

  return {
    isOverlayShown,
    handleClick,
  };
};

export default useOverlay;
