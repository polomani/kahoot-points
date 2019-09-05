import { createStore } from "redux";
import { reducer } from "./reducer";

export * from "./actions";
export * from "./types";
export const store = createStore(reducer);

