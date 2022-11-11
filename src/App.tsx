import { useSelector } from "react-redux";
import type { RootState } from "./store";
// import { toggleIsDataGenerated } from "./store/slices/appSlice";
///
import FieldList from "./components/FieldList/FieldList";
import StartButton from "./components/StartButton/StartButton";
import CustomButton from "./components/CustomButton/CustomButton";
import SVGicon from "./components/SVGicon/SVGicon";
///
import useManipulateData from "./hooks/useManipulateData";

function App() {
  const isDataGenerated = useSelector(
    (state: RootState) => state.app.isDataGenerated
  );

  const { handleDownloadData, handleRefreshAllData } = useManipulateData();

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
                  onClick={handleDownloadData}
                  // iconAnimation="scale"
                >
                  <span>Download</span>
                  <SVGicon id={"download"} />
                </CustomButton>
                <CustomButton
                  onClick={handleRefreshAllData}
                  // iconAnimation="rotate"
                >
                  <span>Refresh all</span>
                  <SVGicon id={"refresh"} />
                </CustomButton>
              </div>
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
