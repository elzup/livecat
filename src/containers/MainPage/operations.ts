import { ThunkAction } from '../../types'
import { updateMainPage } from './actions'

export const selectLiveArchive = (
  selectedLiveArchiveId: string
): ThunkAction => {
  return (dispatch, getState) => {
    dispatch(updateMainPage({ selectedLiveArchiveId }))
  }
}
