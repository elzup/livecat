import { connect } from 'react-redux'

import { State } from '../../types'

import * as React from 'react'
import { startRecording, stopRecording } from './operations'
import { getIsRecording } from './selectors'

export type Props = {
  isRecording: boolean
  startRecording: () => void
  stopRecording: () => void
}

const RecordingControler: React.SFC<Props> = (props: Props) => {
  if (props.isRecording) {
    return (
      <div>
        <h5>{'レコーディング中'}</h5>
        <button onClick={props.stopRecording}>ストップ</button>
      </div>
    )
  }
  return (
    <div>
      <h5>{'待機中'}</h5>
      <button onClick={props.startRecording}>スタート</button>
    </div>
  )
}

const mapStateToProps = (state: State) => {
  return {
    isRecording: getIsRecording(state),
  }
}

export default connect(
  mapStateToProps,
  {
    startRecording,
    stopRecording,
  }
)(RecordingControler)
