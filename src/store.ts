import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import {
  reducer as counter,
  State as CounterState,
} from './containers/Counter/reducer'

import {
  reducer as speechArea,
  State as SpeechArea,
} from './containers/SpeechArea/reducer'

export type AppState = {
  counter: CounterState
  speechArea: SpeechArea
}

const reducer = combineReducers<AppState>({
  counter,
  speechArea,
})

export default () => {
  const middleware = [thunk]

  const devtool =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()

  const composer = devtool
    ? compose(
        applyMiddleware(...middleware),
        devtool
      )
    : compose(applyMiddleware(...middleware))

  const store = createStore(reducer, composer)
  return store
}
