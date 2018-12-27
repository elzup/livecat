import actionCreatorFactory from 'typescript-fsa'
import { ResultRecord } from '../../types'

const actionCreator = actionCreatorFactory()

export const actions = {
  addRecord: actionCreator<ResultRecord>('ADD_RECORD'),
}
