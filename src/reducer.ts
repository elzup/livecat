import { combineReducers } from 'redux'
import { reducer as graphDataById } from './store/GraphDataById/reducer'
import { reducer as liveById } from './store/LiveById/reducer'
import { reducer as logById } from './store/LogById/reducer'
import { reducer as MainPage } from './store/MainPage/reducer'
import { reducer as recorder } from './store/Recorder/reducer'
import { reducer as speechArea } from './store/SpeechArea/reducer'
import { State } from './types'

export const rootReducer = combineReducers<State>({
  speechArea,
  logById,
  recorder,
  MainPage,
  graphDataById,
  liveById,
})
