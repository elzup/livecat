import { ThunkAction } from '../../types'
import { updateRecording } from './actions'

export const stopRecording = () => updateIsRecording(false)
export const startRecording = () => updateIsRecording(true)
export const updateIsRecording = (isRecording: boolean): ThunkAction => {
  return async (dispatch, getState) => {
    dispatch(updateRecording({ isRecording }))
  }
}
