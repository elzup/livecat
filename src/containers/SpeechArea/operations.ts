import { ThunkAction } from '../../types'

import moment from 'moment'
import { saveLog } from '../LogById/operations'
import { getLogOrCreateBy } from '../LogById/selectors'
import { updateArea } from './actions'

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

recognition.onend = () => {
  recognition.start()
}
recognition.onerror = (error: any) => {
  console.error(error)
  console.log('recognition reload')
}

export const recording = (): ThunkAction => {
  return (dispatch, getState) => {
    console.log('register')
    recognition.start()
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
      dispatch(updateGraph())
    }
  }
}

export const updateGraph = (): ThunkAction => {
  return (dispatch, getState) => {
    const m = moment().subtract(3, 'hour')
    const end = moment()
    const data = [] as any
    const state = getState()
    while (m.isBefore(end)) {
      const id = m.format('YYYY-MM-DDTHH:mm')
      const log = getLogOrCreateBy(state, id)
      data.push({
        point: log.point,
        // confident: log.confidentialAverage,
        timestamp: m.format('HH:mm'),
      })
      m.add(1, 'minutes')
    }
    dispatch(updateArea(data))
  }
}
