import * as React from 'react'
import { connect } from 'react-redux'
import { Action } from 'typescript-fsa'

import { State } from '../../types'
import { actions } from './actions'

import SpeechArea from '../../components/SpeechArea'
import { ResultRecord } from '../../types'
import * as operators from './operations'

const mapStateToProps = (state: State) => {
  return state.speechArea
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
