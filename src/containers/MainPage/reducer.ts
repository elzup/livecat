import _ from 'lodash'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { MainPageState } from '../../types'
import * as actions from './actions'

export type State = MainPageState

const initialState: State = {
  selectedLiveArchiveId: null,
}

export const reducer = reducerWithInitialState(initialState).case(
  actions.updateMainPage,
  (state, payload) => {
    return {
      ...state,
      ...payload,
    }
  }
)
