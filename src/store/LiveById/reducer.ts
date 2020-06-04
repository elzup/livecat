import _ from 'lodash'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Live } from '../../types'
import * as actions from './actions'

export interface State {
  [id: string]: Live
}

const initialState = {} as State

export const reducer = reducerWithInitialState(initialState).case(
  actions.registerLive,
  (state, live) => {
    return {
      ...state,
      [live.id]: live,
    }
  }
)
