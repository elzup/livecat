import _ from 'lodash'
import { State } from '../../types'

export const getLiveArchive = (state: State, id: string) => {
  return state.liveArchiveById[id]
}

export const getLiveArchiveList = (state: State) => {
  return _.values(state.liveArchiveById)
}
