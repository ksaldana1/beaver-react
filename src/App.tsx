import { useState } from "react";
import "./App.css";
import { Grid } from "./components/Grid";
import { DEFAULT_GRID, Player } from "./logic/game";

function App() {
  const [player, setPlayer] = useState<Player>({ x: 4, y: 4 });
  // a bunch of state

  // setup hotkeys for moving the player
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Grid player={player} board={DEFAULT_GRID} />
    </div>
  );
}

export default App;
