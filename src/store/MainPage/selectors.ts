import _ from 'lodash'
import { LiveArchive, State } from '../../types'
import { getLiveArchive } from '../LiveArchiveById/selectors'

export const getSelectedLiveArchiveId = (state: State): string | null => {
  return state.MainPage.selectedLiveArchiveId
}

export const getSelectedLiveArchive = (state: State): LiveArchive | null => {
  const id = getSelectedLiveArchiveId(state)
  if (id === null) {
    return null
  }
  return getLiveArchive(state, id)
}
