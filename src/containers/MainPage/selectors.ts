import _ from 'lodash'
import { LiveArchive, State } from '../../types'
import { getLiveArchive } from '../LiveArchiveById/selectors'

export const getSelectedLiveArchive = (state: State): LiveArchive | null => {
  const id = state.MainPage.selectedLiveArchiveId
  if (id === null) {
    return null
  }
  return getLiveArchive(state, id)
}
