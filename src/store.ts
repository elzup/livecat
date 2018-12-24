import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  reducer as counter,
  State as CounterState
} from "./containers/Counter/reducer";

export type AppState = {
  counter: CounterState;
};

const reducer = combineReducers<AppState>({
  counter
});

export default () => {
  const middleware = [thunk];

  const devtool =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__();

  const composer = devtool
    ? compose(
        applyMiddleware(...middleware),
        devtool
      )
    : compose(applyMiddleware(...middleware));

  const store = createStore(reducer, composer);
  return store;
};
