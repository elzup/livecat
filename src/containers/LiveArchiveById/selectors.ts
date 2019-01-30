import { State } from '../../types'

export const getLiveArchive = (state: State, id: string) => {
  return state.liveArchiveById[id]
}
