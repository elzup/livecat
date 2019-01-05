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
    const confidentSum = log.confidentSum + confidence
    const newLog = {
      ...log,
      count,
      confidentSum,
      confidentAverage: confidentSum / count,
      point: log.point + text.length,
    }
    await dispatch(updateLog([newLog]))
  }
}
