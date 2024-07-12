import { produce } from "immer";
import { Reducer, useEffect, useReducer } from "react";
import { match } from "ts-pattern";
import "./App.css";
import { Grid } from "./components/Grid";
import { DEFAULT_GRID } from "./logic/game";

export type AppState = {
  player: {
    position: {
      x: number;
      y: number;
    };
  };
};

const DIRECTION = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
} as const;

type AppEvents = {
  type: "USER_MOVE";
  payload: { direction: (typeof DIRECTION)[keyof typeof DIRECTION] };
};

const reducer: Reducer<AppState, AppEvents> = (state, action) => {
  if (action.type === "USER_MOVE") {
    const { direction } = action.payload;
    if (direction === DIRECTION.LEFT) {
      return produce(state, (draftState) => {
        draftState.player.position.x = draftState.player.position.x - 1;
      });
    }

    if (direction === DIRECTION.RIGHT) {
      return produce(state, (draftState) => {
        draftState.player.position.x = draftState.player.position.x + 1;
      });
    }

    if (direction === DIRECTION.UP) {
      return produce(state, (draftState) => {
        draftState.player.position.y = draftState.player.position.y - 1;
      });
    }

    if (direction === DIRECTION.DOWN) {
      return produce(state, (draftState) => {
        draftState.player.position.y = draftState.player.position.y + 1;
      });
    }
  }

  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    player: { position: { x: 3, y: 4 } },
  });

  // a bunch of state
  useEffect(() => {
    const listener = document.addEventListener("keydown", (event) => {
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

      // todo: return cleanup
    });
  }, []);

  // setup hotkeys for moving the player
  return (
    <div className="h-full">
      <Grid player={state.player} board={DEFAULT_GRID} />
    </div>
  );
}

export default App;
