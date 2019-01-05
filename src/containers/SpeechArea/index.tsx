import { connect } from 'react-redux'

import { State } from '../../types'

import SpeechArea from '../../components/SpeechArea'
import { recording } from './operations'
import { getGraphData } from './selectors'

const mapStateToProps = (state: State) => {
  return {
    graphData: getGraphData(state),
  }
}

export default connect(
  mapStateToProps,
  { recording }
)(SpeechArea)
