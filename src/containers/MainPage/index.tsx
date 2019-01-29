import * as React from 'react'

import { State } from '../../types'

import { connect } from 'react-redux'
import RecordingControler from '../Recorder/RecorderControler'
import SpeechArea from '../SpeechArea'

type Props = {}

class MainPage extends React.Component<Props> {
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
  {}
)(MainPage)
