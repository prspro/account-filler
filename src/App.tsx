import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
///
import StartButton from "./components/StartButton/StartButton";
import { LineList, LineItem } from "./components/LineList/LineList";
import Burger from "./components/Burger/Burger";
import Overlay from "./components/Overlay/Overlay";
import Menu from "./components/Menu/Menu";
///
const Fields = React.lazy(() => import("./components/Fields/Fields"));

function App() {
  const isDataGenerated = useSelector(
    (state: RootState) => state.app.isDataGenerated
  );

  return (
    <div className="app">
      <header className="header">
        <Burger className="header__burger" />
        <a href={process.env.PUBLIC_URL} className="header__title">
          Personal Data Generator
        </a>
      </header>
      <main>
        <Menu />
        {isDataGenerated ? (
          <>
            <Suspense
              fallback={
                <StartButton mode="loading" placeholder={"Loading..."} />
              }
            >
              <section>
                <div className="container">
                  <Fields />
                </div>
              </section>
            </Suspense>
          </>
        ) : (
          <StartButton mode="waiting" placeholder={"Generate me!"} />
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
        </LineList>
      </footer>
      <Overlay />
    </div>
  );
}

export default App;
