import { useSelector } from "react-redux";
import type { RootState } from "./store";
///
import FieldList from "./components/FieldList/FieldList";
import StartButton from "./components/StartButton/StartButton";
import CustomButton from "./components/CustomButton/CustomButton";
import SVGicon from "./components/SVGicon/SVGicon";
import { LineList, LineItem } from "./components/LineList/LineList";
import Burger from "./components/Burger/Burger";
///
import useManipulateData from "./hooks/useManipulateData";
import Overlay from "./components/Overlay/Overlay";

function App() {
  const isDataGenerated = useSelector(
    (state: RootState) => state.app.isDataGenerated
  );

  const { handleDownloadData, handleRefreshAllData } = useManipulateData();

  return (
    <div className="app">
      <header className="header">
        <Burger className="header__burger"/>
        <a href="/" className="header__title">
          Lorem, ipsum dolor.
        </a>
      </header>
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
                <LineList>
                  <LineItem>
                    <CustomButton
                      onClick={handleDownloadData}
                      // iconAnimation="scale"
                    >
                      <span>Download</span>
                      <SVGicon id={"download"} />
                    </CustomButton>
                  </LineItem>
                  <LineItem>
                    <CustomButton
                      onClick={handleRefreshAllData}
                      // iconAnimation="rotate"
                    >
                      <span>Refresh all</span>
                      <SVGicon id={"refresh"} />
                    </CustomButton>
                  </LineItem>
                </LineList>
              </div>
            </section>
          </>
        ) : (
          <StartButton placeholder={"Generate me!"} />
        )}
      </main>
      <footer className="footer">
        <ul>
          <li>link1</li>
          <li>link4</li>
          <li>link3</li>
          <li>link2</li>
        </ul>
      </footer>
      <Overlay />
    </div>
  );
}

export default App;
