import actionCreatorFactory from 'typescript-fsa'
import { GraphRecord } from '../../types'

const actionCreator = actionCreatorFactory()

export const updateArea = actionCreator<GraphRecord[]>('UPDATE_AREA')
export const updateLastText = actionCreator<string>('UPDATE_LAST_TEXT')
