import { connect } from 'react-redux'

import { State } from '../../types'

import SpeechArea from '../../components/SpeechArea'
import { selectGraph } from '../../store/SpeechArea/actions'
import { recording } from '../../store/SpeechArea/operations'
import {
  getGraphData,
  getLastText,
  getSelectedGraph,
} from '../../store/SpeechArea/selectors'

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
