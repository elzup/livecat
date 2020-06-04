import _ from 'lodash'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Log } from '../../types'
import * as actions from './actions'

export interface State {
  [id: string]: { [id: string]: Log }
}

const initialState: State = {} as State

export const reducer = reducerWithInitialState(initialState)
  .case(actions.updateLog, (state, { liveId, logs }) => {
    return {
      ...state,
      [liveId]: {
        ...state[liveId],
        ..._.keyBy(logs, 'id'),
      },
    }
  })
  .case(actions.resetLog, () => initialState)
