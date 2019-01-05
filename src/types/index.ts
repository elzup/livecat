import { AppState } from './state'

import { AnyAction } from 'redux'
import { ThunkAction as _ThunkAction } from 'redux-thunk'

export type ThunkAction = _ThunkAction<
  void | Promise<void>,
  State,
  undefined,
  AnyAction
>

export type State = AppState
export type ResultRecord = {
  text: string
  confidence: number
  timestamp: number
}

export type GraphRecord = { point: number; timestamp: string }

export type Log = {
  id: string
  count: number
  confidentialSum: number
  confidentialAverage: number
  point: number
}

export type ConfidenceLib = {
  [key: string]: {
    sum: number
    count: number
    average: number
  }
}
