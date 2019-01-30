import moment from 'moment'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { RecorderState } from '../../types'
import * as actions from './actions'

// 1分で何文字喋ったか
export type State = RecorderState

const initialState = {
  isRecording: false,
  startTime: 0,
}

export const reducer = reducerWithInitialState(initialState).case(
  actions.updateRecording,
  (state, payload) => {
    return { ...state, ...payload }
  }
)
