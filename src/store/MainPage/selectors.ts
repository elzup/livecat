import _ from 'lodash'
import { Live, State } from '../../types'
import { getLive } from '../LiveById/selectors'

export const getSelectedLiveId = (state: State): string | null => {
  return state.MainPage.selectedLiveId
}

export const getSelectedLive = (state: State): Live | null => {
  const id = getSelectedLiveId(state)
  if (id === null) {
    return null
  }
  return getLive(state, id)
}
