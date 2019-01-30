import { State } from '../../types'

export const getRecordingState = (state: State) => state.recorder
export const getIsRecording = (state: State) =>
  getRecordingState(state).isRecording

export const getStartTime = (state: State) => getRecordingState(state).startTime
