import * as React from 'react'

import { LiveArchive, State } from '../../types'

import { connect } from 'react-redux'
import { getSelectedLiveArchive } from '../../store/MainPage/selectors'
import { syncRecording } from '../../store/Recorder/operations'
import ArchiveList from '../ArchiveList'
import SpeechArea from '../SpeechArea'
import RecordingControler from './RecordingControler'

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
        <ArchiveList />
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
