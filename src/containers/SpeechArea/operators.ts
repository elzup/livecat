import { AnyAction } from "redux";
import { actions } from "./actions";

import { AppState } from "../../store";

import { ThunkAction } from "redux-thunk";

export const recording = (): ThunkAction<
  void,
  AppState,
  undefined,
  AnyAction
> => {
  return (dispatch, getState) => {};
};
