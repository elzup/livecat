import actionCreatorFactory from 'typescript-fsa'
import { Live } from '../../types'

const actionCreator = actionCreatorFactory()

export const registerLive = actionCreator<Live>('registerLive')
