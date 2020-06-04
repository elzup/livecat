import * as React from 'react'

import { Live, State } from '../../types'

import { connect } from 'react-redux'
import { getSelectedLive } from '../../store/MainPage/selectors'
import { syncRecording } from '../../store/Recorder/operations'
import ArchiveList from '../ArchiveList'
import SpeechArea from '../SpeechArea'
import RecordingControler from './RecordingControler'

type Props = {
  live: Live | null
  syncRecording: () => void
}

class MainPage extends React.Component<Props> {
  componentDidMount() {
    this.props.syncRecording()
  }
  render() {
    const { props } = this
    const { live } = props
    return (
      <div>
        <h4>SpeechArea</h4>
        {live === null ? <SpeechArea /> : <p>{live.id}</p>}
        <RecordingControler />
        <ArchiveList />
      </div>
    )
  }
}

type OProps = {}
type SProps = {
  live: Live | null
}
type DProps = {
  syncRecording: () => void
}
export default connect<SProps, DProps, OProps, State>(
  (state, oprops) => ({
    live: getSelectedLive(state),
  }),
  { syncRecording }
)(MainPage)
