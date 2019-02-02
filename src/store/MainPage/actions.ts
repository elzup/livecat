import actionCreatorFactory from 'typescript-fsa'
import { LiveArchive, MainPageState } from '../../types'

const actionCreator = actionCreatorFactory()

export const updateMainPage = actionCreator<Partial<MainPageState>>(
  'updateMainPage'
)
