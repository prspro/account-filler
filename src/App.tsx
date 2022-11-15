import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
///
// import FieldList from "./components/FieldList/FieldList";
import StartButton from "./components/StartButton/StartButton";
// import CustomButton from "./components/CustomButton/CustomButton";
// import SVGicon from "./components/SVGicon/SVGicon";
import { LineList, LineItem } from "./components/LineList/LineList";
import Burger from "./components/Burger/Burger";
import Overlay from "./components/Overlay/Overlay";
import Menu from "./components/Menu/Menu";
///
// import useManipulateData from "./hooks/useManipulateData";

const Fields = React.lazy(() => import("./components/Fields/Fields"));

function App() {
  const isDataGenerated = useSelector(
    (state: RootState) => state.app.isDataGenerated
  );

  // const { handleDownloadData, handleRefreshAllData } = useManipulateData();

  return (
    <div className="app">
      <header className="header">
        <Burger className="header__burger" />
        <a href="/" className="header__title">
          Personal Data Generator
        </a>
      </header>
      <main>
        <Menu />
        {isDataGenerated ? (
          <>
            <Suspense
              fallback={<StartButton placeholder={"Generating data..."} />}
            >
              <section>
                <div className="container">
                  <Fields />
                </div>
              </section>
            </Suspense>
          </>
        ) : (
          <StartButton placeholder={"Generate me!"} />
        )}
      </main>
      <footer className="footer">
        <LineList>
          <LineItem>
            <a
              className="footer__link"
              href="https://keepass.info/"
              rel="noreferrer"
              target="_blank"
            >
              KeePass
            </a>
          </LineItem>
          <LineItem>
            <a
              className="footer__link"
              href="https://github.com/prspro/account-filler"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </LineItem>
          <LineItem>
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/48548b122/"
              rel="noreferrer"
              target="_blank"
            >
              Development
            </a>
          </LineItem>
          <LineItem>
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/0a9a041a3/"
              rel="noreferrer"
              target="_blank"
            >
              Design
            </a>
          </LineItem>
        </LineList>
      </footer>
      <Overlay />
    </div>
  );
}

export default App;
