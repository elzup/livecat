import actionCreatorFactory, { Action } from 'typescript-fsa'
import { Log } from '../../types'

const actionCreator = actionCreatorFactory()

export const updateLog = actionCreator<{ liveId: string; logs: Log[] }>(
  'ACTIONS_UPDATE_LOG'
)
export const resetLog = actionCreator('resetLog')
