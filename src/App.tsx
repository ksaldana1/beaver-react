import "./App.css";
import { Grid } from "./components/Grid";
import { DEFAULT_GRID } from "./logic/game";

function App() {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Grid board={DEFAULT_GRID} />
    </div>
  );
}

export default App;
