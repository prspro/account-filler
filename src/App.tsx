import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store";
import { toggleIsDataGenerated } from "./store/slices/appSlice";
///
import FieldList from "./components/FieldList/FieldList";
import StartButton from "./components/StartButton/StartButton";
import CustomButton from "./components/CustomButton/CustomButton";
///
import useDownloadData from "./hooks/useDownloadData";

function App() {
  const isDataGenerated = useSelector(
    (state: RootState) => state.app.isDataGenerated
  );

  const { handleDownloadData } = useDownloadData();

  const dispatch = useDispatch();

  return (
    <div className="app">
      <header>header</header>
      <main>
        {isDataGenerated ? (
          <>
            <section>
              <div className="container">
                <FieldList />
              </div>
            </section>
            <section>
              <div className="container">
                <CustomButton
                  iconID="download"
                  text={"Download"}
                  onClick={handleDownloadData}
                />
                <CustomButton
                  text={"Close"}
                  onClick={() => dispatch(toggleIsDataGenerated())}
                />
              </div>{" "}
            </section>
          </>
        ) : (
          <StartButton placeholder={"Generate me!"} />
        )}
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
