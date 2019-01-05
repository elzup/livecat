import moment from 'moment'
import { ThunkAction } from '../../types'
import { updateLog } from './actions'
import { getLogOrCreateBy } from './selectors'

interface IWindow extends Window {
  webkitSpeechRecognition: any
}

export const saveLog = (text: string, confidence: number): ThunkAction => {
  return async (dispatch, getState) => {
    const now = Date.now()
    const min = moment(now).format('YYYY-MM-DDTHH:mm')
    const log = getLogOrCreateBy(getState(), min)
    const count = log.count + 1
    const confidentialSum = log.confidentialSum + confidence
    const newLog = {
      ...log,
      count,
      confidentialSum,
      confidentialAverage: confidentialSum / count,
      point: log.point + text.length,
    }
    await dispatch(updateLog([newLog]))
  }
}
