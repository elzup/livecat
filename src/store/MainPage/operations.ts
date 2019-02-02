import { ThunkAction } from '../../types'
import { updateMainPage } from './actions'

export const selectLiveArchive = (
  selectedLiveArchiveId: string | null
): ThunkAction => {
  return (dispatch, getState) => {
    dispatch(updateMainPage({ selectedLiveArchiveId }))
  }
}
