import { combineReducers } from 'redux'
import { reducer as graphDataById } from './containers/GraphDataById/reducer'
import { reducer as liveArchiveById } from './containers/LiveArchiveById/reducer'
import { reducer as logById } from './containers/LogById/reducer'
import { reducer as MainPage } from './containers/MainPage/reducer'
import { reducer as recorder } from './containers/Recorder/reducer'
import { reducer as speechArea } from './containers/SpeechArea/reducer'
import { State } from './types'

export const rootReducer = combineReducers<State>({
  speechArea,
  logById,
  recorder,
  MainPage,
  graphDataById,
  liveArchiveById,
})
