import * as React from 'react'

import { State } from '../../types'

import { connect } from 'react-redux'
import { syncRecording } from '../Recorder/operations'
import RecordingControler from '../Recorder/RecorderControler'
import SpeechArea from '../SpeechArea'

type Props = {
  syncRecording: () => void
}

class MainPage extends React.Component<Props> {
  componentDidMount() {
    this.props.syncRecording()
  }
  render() {
    return (
      <div>
        <h4>SpeechArea</h4>
        <SpeechArea />
        <RecordingControler />
      </div>
    )
  }
}

const mapStateToProps = (appState: State) => ({})

export default connect(
  mapStateToProps,
  { syncRecording }
)(MainPage)
