import * as React from 'react'

import { LiveArchive, State } from '../../types'

import { connect } from 'react-redux'
import { getLiveArchive } from '../LiveArchiveById/selectors'
import { syncRecording } from '../Recorder/operations'
import RecordingControler from '../Recorder/RecorderControler'
import SpeechArea from '../SpeechArea'
import { getSelectedLiveArchive } from './selectors'

type Props = {
  liveArchive: LiveArchive | null
  syncRecording: () => void
}

class MainPage extends React.Component<Props> {
  componentDidMount() {
    this.props.syncRecording()
  }
  render() {
    const { props } = this
    const { liveArchive } = props
    return (
      <div>
        <h4>SpeechArea</h4>
        {liveArchive === null ? <SpeechArea /> : <p>{liveArchive.id}</p>}
        <RecordingControler />
      </div>
    )
  }
}

type OProps = {}
type SProps = {
  liveArchive: LiveArchive | null
}
type DProps = {
  syncRecording: () => void
}
export default connect<SProps, DProps, OProps, State>(
  (state, oprops) => ({
    liveArchive: getSelectedLiveArchive(state),
  }),
  { syncRecording }
)(MainPage)
