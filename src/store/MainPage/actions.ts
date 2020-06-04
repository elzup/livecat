import actionCreatorFactory from 'typescript-fsa'
import { Live, MainPageState } from '../../types'

const actionCreator = actionCreatorFactory()

export const updateMainPage = actionCreator<Partial<MainPageState>>(
  'updateMainPage'
)
