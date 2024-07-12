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
  return match(action)
    .returnType<AppState>()
    .with({ type: "USER_MOVE" }, (action) => {
      const { direction } = action.payload;
      return match(direction)
        .with(DIRECTION.LEFT, () => {
          return produce(state, (draftState) => {
            draftState.player.position.x = draftState.player.position.x - 1;
          });
        })
        .with(DIRECTION.RIGHT, () => {
          return produce(state, (draftState) => {
            draftState.player.position.x = draftState.player.position.x + 1;
          });
        })
        .with(DIRECTION.UP, () => {
          return produce(state, (draftState) => {
            draftState.player.position.y = draftState.player.position.y - 1;
          });
        })
        .with(DIRECTION.DOWN, () => {
          return produce(state, (draftState) => {
            draftState.player.position.y = draftState.player.position.y + 1;
          });
        })
        .exhaustive();
    })
    .exhaustive();
};

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
      <Keyboard />
    </div>
  );
}

function Keyboard({
  onClick,
}: {
  onClick: (direction: (typeof DIRECTION)[keyof typeof DIRECTION]) => void;
}) {
  const buttonClasses =
    "text-2xl bg-green-600 text-white rounded-md cursor-pointer w-36 h-10";
  return (
    <>
      <div className="flex justify-center">
        <button className={buttonClasses}>↑</button>
      </div>
      <div className="flex justify-center gap-4">
        <button className={buttonClasses}>←</button>
        <button className={buttonClasses}>↓</button>
        <button className={buttonClasses}>→</button>
      </div>
    </>
  );
}

export default App;
