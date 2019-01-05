import moment from 'moment'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { ConfidenceLib, GraphRecord, ResultRecord } from '../../types'
import * as actions from './actions'

// 1分で何文字喋ったか
export interface State {
  graphData: GraphRecord[]
}

const initialState: State = {
  graphData: [] as GraphRecord[],
}

export const reducer = reducerWithInitialState(initialState).case(
  actions.updateArea,
  (state, area) => {
    return { graphData: area }
  }
)
