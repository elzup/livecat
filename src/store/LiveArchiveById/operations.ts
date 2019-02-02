import moment from 'moment'
import { LiveArchive, Log, ThunkAction } from '../../types'
import { resetGraphData } from '../GraphDataById/actions'
import {
  get1HourGraphData,
  get30MinGraphData,
  get3HourGraphData,
} from '../GraphDataById/selectors'
import { resetLog } from '../LogById/actions'
import { getStartTime } from '../Recorder/selectors'
import { registerLiveArchive } from './actions'

export const archiveLive = (): ThunkAction => {
  return async (dispatch, getState) => {
    // reset
    const state = getState()
    const startTime = getStartTime(state)
    const m = moment(startTime)
    const liveArchive: LiveArchive = {
      id: m.format('YYYY-MM-DD HH:mm:ss'),
      label: m.format('YYYY-MM-DD HH:mm:ss'),
      startTime,
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
