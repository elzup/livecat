import { State as LogById } from '../containers/LogById/reducer'
import { State as SpeechArea } from '../containers/SpeechArea/reducer'

export type AppState = {
  speechArea: SpeechArea
  logById: LogById
}
