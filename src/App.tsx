import { useEffect, useReducer } from "react";
import { match } from "ts-pattern";
import "./App.css";
import { Grid } from "./components/Grid";
import { DEFAULT_GRID } from "./logic/game";
import { DIRECTION, Direction, reducer } from "./logic/app";
import { Keyboard } from "./components/Keyboard";
import { AppContext } from "./context/AppContext";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    player: { position: { x: 3, y: 4 }, facing: "RIGHT" },
  });

  // hotkeys for player movement
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      const key = event.key;
      const direction = match(key)
        .with("ArrowLeft", "a", () => DIRECTION.LEFT)
        .with("ArrowRight", "d", () => DIRECTION.RIGHT)
        .with("ArrowUp", "w", () => DIRECTION.UP)
        .with("ArrowDown", "s", () => DIRECTION.DOWN)
        .otherwise(() => null);

      if (direction) {
        dispatch({ type: "USER_MOVE", payload: { direction } });
      }
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, []);

  return (
    <AppContext.Provider value={state}>
      <div className="h-full flex flex-col items-center gap-5">
        <Grid board={DEFAULT_GRID} />
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
    </AppContext.Provider>
  );
}

export default App;
