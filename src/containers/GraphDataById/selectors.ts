import { GraphType, State } from '../../types'

export const get3HourGraphData = (state: State) => getGraphData(state, '3hour')
export const get1HourGraphData = (state: State) => getGraphData(state, '1hour')
export const get30MinGraphData = (state: State) => getGraphData(state, '30min')

export const getGraphData = (state: State, id: GraphType) => {
  return state.graphDataById[id]
}
