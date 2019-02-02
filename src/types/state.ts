import { State as GraphDataById } from '../store/GraphDataById/reducer'
import { State as LiveArchiveById } from '../store/LiveArchiveById/reducer'
import { State as LogById } from '../store/LogById/reducer'
import { State as MainPage } from '../store/MainPage/reducer'
import { State as Recorder } from '../store/Recorder/reducer'
import { State as SpeechArea } from '../store/SpeechArea/reducer'

export type AppState = {
  speechArea: SpeechArea
  logById: LogById
  recorder: Recorder
  MainPage: MainPage
  liveArchiveById: LiveArchiveById
  graphDataById: GraphDataById
}
