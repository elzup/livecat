import { GraphData, ThunkAction } from '../../types'

import { updateGraph } from '../GraphDataById/operations'
import { saveLog } from '../LogById/operations'
import { getIsRecording } from '../Recorder/selectors'
import { updateLastText } from './actions'

interface IWindow extends Window {
  webkitSpeechRecognition: any
}

type RecognitionResult = {
  confidence: number
  transcript: string
}
const { webkitSpeechRecognition }: IWindow = <IWindow>window
const SR = webkitSpeechRecognition || SpeechRecognition
const recognition = new SR()

recognition.lang = 'ja-JP'
recognition.continuous = false

recognition.onerror = (error: any) => {
  // console.error(error)
  console.log('recognition reload')
}

export const recordingStop = (): ThunkAction => {
  return (dispatch, getState) => {
    recognition.stop()
  }
}

export const recording = (): ThunkAction => {
  return (dispatch, getState) => {
    console.log('register')
    recognition.start()
    recognition.onend = () => {
      if (!getIsRecording(getState())) {
        return
      }
      recognition.start()
    }
    recognition.onresult = async (event: {
      results: RecognitionResult[][]
    }) => {
      const lastResult = event.results[event.results.length - 1]
      if (!lastResult && !lastResult[0]) {
        return
      }

      const text = lastResult[0].transcript
      const confidence = lastResult[0].confidence
      await dispatch(saveLog(text, confidence))
      await dispatch(updateLastText(text))
      dispatch(updateGraph())
    }
  }
}
