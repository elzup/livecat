import { AnyAction } from 'redux'
import { actions } from './actions'

import { AppState } from '../../store'

import { ThunkAction } from 'redux-thunk'

export const addPrefix = (
  prefix: string
): ThunkAction<void, AppState, undefined, AnyAction> => {
  return (dispatch, getState) => {
    const value = getState().counter.value
    dispatch(actions.updateValue(prefix + value))
  }
}
