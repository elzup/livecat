import { State as GraphDataById } from '../containers/GraphDataById/reducer'
import { State as LiveArchiveById } from '../containers/LiveArchiveById/reducer'
import { State as LogById } from '../containers/LogById/reducer'
import { State as Recorder } from '../containers/Recorder/reducer'
import { State as SpeechArea } from '../containers/SpeechArea/reducer'

export type AppState = {
  speechArea: SpeechArea
  logById: LogById
  recorder: Recorder
  liveArchiveById: LiveArchiveById
  graphDataById: GraphDataById
}
