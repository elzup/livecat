import _ from 'lodash'
import { Live, State } from '../../types'

export const getLive = (state: State, id: string) => {
  return state.liveById[id]
}

export const getLiveList = (state: State): Live[] => {
  return _.values(state.liveById)
}
