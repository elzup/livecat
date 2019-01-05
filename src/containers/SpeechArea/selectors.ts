import { GraphRecord, State } from '../../types'
import { Log } from '../../types'

export const getLog = (state: State, id: string): Log | undefined => {
  return state.logById[id]
}

export const getGraphData = (state: State): GraphRecord[] => {
  return state.speechArea.graphData || []
}
