import { useSelector } from "react-redux";
import type { RootState } from "./store";
import FieldList from "./components/FieldList/FieldList";
import StartButton from "./components/StartButton/StartButton";

function App() {
  const isDataGenerated = useSelector(
    (state: RootState) => state.app.isDataGenerated
  );

  return (
    <div className="app">
      <header>header</header>
      <main>
        {isDataGenerated ? (
          <section>
            <div className="container relative">
              <FieldList />
            </div>
          </section>
        ) : (
          <StartButton placeholder={"Generate me!"} />
        )}
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
