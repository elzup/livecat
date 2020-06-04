import moment from 'moment'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { GraphData, GraphType, SpeechArea } from '../../types'
import * as actions from './actions'

// 1分で何文字喋ったか
export type State = SpeechArea

const initialState: State = {
  lastText: '',
  selectedGraph: '30min',
}

export const reducer = reducerWithInitialState<State>(initialState)
  .case(actions.updateLastText, (state, lastText) => {
    return { ...state, lastText }
  })
  .case(actions.selectGraph, (state, selectedGraph) => {
    return { ...state, selectedGraph }
  })
