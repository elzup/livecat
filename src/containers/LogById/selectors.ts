import { State } from '../../types'
import { Log } from '../../types'

export const getLog = (state: State, id: string): Log | undefined => {
  return state.logById[id]
}

export const getLogOrCreateBy = (state: State, id: string): Log => {
  const log = getLog(state, id)
  if (log) {
    return log
  }
  return {
    id,
    count: 0,
    confidentialSum: 0,
    confidentialAverage: 0,
    point: 0,
  }
}
