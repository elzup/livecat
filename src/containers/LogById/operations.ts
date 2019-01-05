import { AnyAction } from 'redux'

import { State, ThunkAction } from '../../types'

interface IWindow extends Window {
  webkitSpeechRecognition: any
}

export const recording = (text: string, confidence: number): ThunkAction => {
  return (dispatch, getState) => {}
}
