import { connect } from 'react-redux'

import { State } from '../../types'

import SpeechArea from '../../components/SpeechArea'
import { recording } from './operations'
import { getGraphData, getLastText } from './selectors'

const mapStateToProps = (state: State) => {
  return {
    graphData: getGraphData(state),
    lastText: getLastText(state),
  }
}

export default connect(
  mapStateToProps,
  { recording }
)(SpeechArea)
