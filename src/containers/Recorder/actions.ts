import actionCreatorFactory from 'typescript-fsa'
import { State } from './reducer'

const actionCreator = actionCreatorFactory()

export const updateRecording = actionCreator<Partial<State>>('updateRecording')
