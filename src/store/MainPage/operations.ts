import { ThunkAction } from '../../types'
import { updateMainPage } from './actions'

export const selectLive = (selectedLiveId: string | null): ThunkAction => {
  return (dispatch, getState) => {
    dispatch(updateMainPage({ selectedLiveId }))
  }
}
