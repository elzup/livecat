import actionCreatorFactory from 'typescript-fsa'
import { LiveArchive } from '../../types'

const actionCreator = actionCreatorFactory()

export const registerLiveArchive = actionCreator<LiveArchive>(
  'registerLiveArchive'
)
