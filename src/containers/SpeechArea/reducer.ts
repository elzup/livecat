import moment from 'moment'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { ResultRecord } from '../../types'
import { actions } from './actions'

// 1分で何文字喋ったか
export interface State {
  records: ResultRecord[]
  startTime: number | null
  endTime: number | null
  talkPointsByMin: { [key: string]: number }
  // graphData: Array<{ timestamp: number; talkPoint: number }>;
}

const initialState: State = {
  records: [],
  startTime: null,
  endTime: null,
  talkPointsByMin: {} as { [key: string]: number },
  // graphData: []
}

export const reducer = reducerWithInitialState(initialState).case(
  actions.addRecord,
  (state, record) => {
    const now = Date.now()
    const min = moment(now).format('YYYY-MM-DDTHH:mm')
    const point = record.text.length
    return {
      ...state,
      startTime: state.startTime || now,
      talkPointsByMin: {
        ...state.talkPointsByMin,
        [min]: (state.talkPointsByMin[min] || 0) + point,
      },
      endTime: now,
      records: [...state.records, record],
    }
  }
)
