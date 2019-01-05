import moment from 'moment'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { ConfidenceLib, GraphRecord, ResultRecord } from '../../types'
import * as actions from './actions'

// 1分で何文字喋ったか
export interface State {
  graphData: GraphRecord[]
  lastText: string
}

const initialState: State = {
  graphData: [] as GraphRecord[],
  lastText: '',
}

export const reducer = reducerWithInitialState(initialState)
  .case(actions.updateArea, (state, area) => {
    return { ...state, graphData: area }
  })
  .case(actions.updateLastText, (state, lastText) => {
    return { ...state, lastText }
  })
