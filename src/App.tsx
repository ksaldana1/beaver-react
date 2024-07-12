import { useEffect, useReducer } from "react";
import { match } from "ts-pattern";
import "./App.css";
import { Grid } from "./components/Grid";
import { DEFAULT_GRID } from "./logic/game";
import { DIRECTION, Direction, reducer } from "./logic/app";
import { Keyboard } from "./components/Keyboard";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    player: { position: { x: 3, y: 4 } },
  });

  // a bunch of state
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      const key = event.key;
      const direction = match(key)
        .with("ArrowLeft", () => DIRECTION.LEFT)
        .with("ArrowRight", () => DIRECTION.RIGHT)
        .with("ArrowUp", () => DIRECTION.UP)
        .with("ArrowDown", () => DIRECTION.DOWN)
        .otherwise(() => null);

      if (direction) {
        dispatch({ type: "USER_MOVE", payload: { direction } });
      }
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, []);

  // setup hotkeys for moving the player
  return (
    <div className="h-full flex flex-col items-center gap-5">
      <Grid player={state.player} board={DEFAULT_GRID} />
      <Keyboard
        onClick={(direction: Direction) => {
          dispatch({
            type: "USER_MOVE",
            payload: {
              direction,
            },
          });
        }}
      />
    </div>
  );
}

export default App;
