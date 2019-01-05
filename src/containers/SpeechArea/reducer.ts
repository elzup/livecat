import moment from 'moment'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { ResultRecord } from '../../types'
import { actions } from './actions'

type ConfidenceLib = {
  [key: string]: {
    sum: number
    count: number
    average: number
  }
}

// 1分で何文字喋ったか
export interface State {
  records: ResultRecord[]
  startTime: number | null
  endTime: number | null
  talkPointsByMin: { [key: string]: number }
  confidencePointsByMin: ConfidenceLib
  // graphData: Array<{ timestamp: number; talkPoint: number }>;
}

const initialState: State = {
  records: [],
  startTime: null,
  endTime: null,
  talkPointsByMin: {} as { [key: string]: number },
  confidencePointsByMin: {} as ConfidenceLib,
  // graphData: []
}

export const reducer = reducerWithInitialState(initialState).case(
  actions.addRecord,
  (state, record) => {
    const now = Date.now()
    const min = moment(now).format('YYYY-MM-DDTHH:mm')
    const point = record.text.length

    const confidenceNow = state.confidencePointsByMin[min] || {
      sum: 0,
      count: 0,
      average: 0,
    }
    const sum = confidenceNow.sum + record.confidence
    const count = confidenceNow.count + 1
    const confidenceNew = {
      sum,
      count,
      average: sum / count,
    }

    return {
      ...state,
      startTime: state.startTime || now,
      talkPointsByMin: {
        ...state.talkPointsByMin,
        [min]: (state.talkPointsByMin[min] || 0) + point,
      },
      confidencePointsByMin: {
        ...state.confidencePointsByMin,
        [min]: confidenceNew,
      },
      endTime: now,
      records: [...state.records, record],
    }
  }
)
