import _ from 'lodash'
import { LiveArchive, State } from '../../types'

export const getLiveArchive = (state: State, id: string) => {
  return state.liveArchiveById[id]
}

export const getLiveArchiveList = (state: State): LiveArchive[] => {
  return _.values(state.liveArchiveById)
}
