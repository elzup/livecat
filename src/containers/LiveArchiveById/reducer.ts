import _ from 'lodash'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { LiveArchive } from '../../types'
import * as actions from './actions'

export interface State {
  [id: string]: LiveArchive
}

const initialState = {} as State

export const reducer = reducerWithInitialState(initialState).case(
  actions.registerLiveArchive,
  (state, liveArchive) => {
    return {
      ...state,
      [liveArchive.id]: liveArchive,
    }
  }
)
