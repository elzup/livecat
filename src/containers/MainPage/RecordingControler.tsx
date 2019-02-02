import { connect } from 'react-redux'

import { State } from '../../types'

import { Button } from '@material-ui/core'
import * as React from 'react'
import { startRecording, stopRecording } from '../../store/Recorder/operations'
import { getIsRecording } from '../../store/Recorder/selectors'

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
        <Button color="primary" disabled onClick={props.startRecording}>
          スタート
        </Button>
        <Button color="primary" onClick={props.stopRecording}>
          ストップ
        </Button>
      </div>
    )
  }
  return (
    <div>
      <h5>{'待機中'}</h5>
      <Button color="primary" onClick={props.startRecording}>
        スタート
      </Button>
      <Button color="primary" disabled onClick={props.stopRecording}>
        ストップ
      </Button>
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
