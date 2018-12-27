import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

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

const rootReducer = combineReducers<AppState>({
  counter,
  speechArea,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

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

  const store = createStore(persistedReducer, composer)
  const persistor = persistStore(store)
  return { store, persistor }
}
