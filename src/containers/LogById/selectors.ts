import { State } from '../../types'
import { Log } from '../../types'

export const getLog = (state: State, id: number): Log | undefined => {
  return state.logById[id]
}
