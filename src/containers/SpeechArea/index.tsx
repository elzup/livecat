import { connect } from 'react-redux'

import { GraphType, State } from '../../types'

import SpeechArea from '../../components/SpeechArea'
import { selectGraph } from './actions'
import { recording } from './operations'
import { getGraphData, getLastText, getSelectedGraph } from './selectors'

const mapStateToProps = (state: State) => {
  return {
    graphData: getGraphData(state),
    lastText: getLastText(state),
    selectedGraph: getSelectedGraph(state),
  }
}

export default connect(
  mapStateToProps,
  {
    recording,
    onSelectGraph: selectGraph,
  }
)(SpeechArea)
