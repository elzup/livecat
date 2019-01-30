import moment from 'moment'
import { ThunkAction } from '../../types'
import { archiveLive } from '../LiveArchiveById/operations'
import { recording, recordingStop } from '../SpeechArea/operations'
import { updateRecording } from './actions'

export const startRecording = (): ThunkAction => {
  return async (dispatch, getState) => {
    dispatch(updateStartRecording())
    dispatch(recording())
    dispatch(updateStartTime(+moment()))
  }
}

export const stopRecording = (): ThunkAction => {
  return async (dispatch, getState) => {
    await dispatch(updateStopRecording())
    dispatch(archiveLive())
    dispatch(recordingStop())
  }
}

export const updateStopRecording = () => updateIsRecording(false)
export const updateStartRecording = () => updateIsRecording(true)
export const updateIsRecording = (isRecording: boolean): ThunkAction => {
  return async (dispatch, getState) => {
    await dispatch(updateRecording({ isRecording }))
  }
}
export const updateStartTime = (startTime: number): ThunkAction => {
  return async (dispatch, getState) => {
    await dispatch(updateRecording({ startTime }))
  }
}
