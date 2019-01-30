import moment from 'moment'
import { LiveArchive, Log, ThunkAction } from '../../types'
import { resetGraphData } from '../GraphDataById/actions'
import {
  get1HourGraphData,
  get30MinGraphData,
  get3HourGraphData,
} from '../GraphDataById/selectors'
import { resetLog } from '../LogById/actions'
import { registerLiveArchive } from './actions'

export const archiveLive = (): ThunkAction => {
  return async (dispatch, getState) => {
    // reset
    const state = getState()
    const liveArchive: LiveArchive = {
      id: 0,
      label: 'test',
      startTime: 0, // TODO
      endTime: +moment(),
      logById: state.logById,
      graph30m: get30MinGraphData(state),
      graph1h: get1HourGraphData(state),
      graph3h: get3HourGraphData(state),
    }
    dispatch(resetGraphData())
    dispatch(resetLog())
    dispatch(registerLiveArchive(liveArchive))
  }
}
