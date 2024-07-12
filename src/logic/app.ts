import { produce } from "immer";
import { Reducer } from "react";
import { match } from "ts-pattern";
import { ValueOf } from "type-fest";

export type AppState = {
  player: {
    position: {
      x: number;
      y: number;
    };
  };
};

export const DIRECTION = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
} as const;

export type Direction = ValueOf<typeof DIRECTION>;

export type AppEvents = {
  type: "USER_MOVE";
  payload: { direction: Direction };
};

export const reducer: Reducer<AppState, AppEvents> = (state, action) => {
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
