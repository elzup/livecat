import * as React from 'react'
import { connect } from 'react-redux'
import { Action } from 'typescript-fsa'

import { AppState } from '../../store'
import { actions } from './actions'

import SpeechArea from '../../components/SpeechArea'
import { ResultRecord } from '../../types'
import * as operators from './operations'

export interface Actions {
  addRecord: (v: ResultRecord) => Action<ResultRecord>
  recording: () => Action<void>
}

const mapStateToProps = (appState: AppState) => {
  return appState.speechArea
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addRecord: (v: ResultRecord) => dispatch(actions.addRecord(v)),
    recording: () => dispatch(operators.recording()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeechArea)
