import _ from 'lodash'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { GraphData } from '../../types'
import * as actions from './actions'

export interface State {
  [id: string]: GraphData
}

const initialState: State = {}

export const reducer = reducerWithInitialState<State>(initialState)
  .case(actions.updateGraphData, (state, { id, data }) => {
    return {
      ...state,
      [id]: data,
    }
  })
  .case(actions.resetGraphData, () => {
    return initialState
  })
