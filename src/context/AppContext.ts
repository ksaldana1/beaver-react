import { createContext, useContext } from "react";
import { AppState } from "../logic/app";

export const AppContext = createContext<AppState>(null!);

export function useAppContext() {
  return useContext(AppContext);
}
