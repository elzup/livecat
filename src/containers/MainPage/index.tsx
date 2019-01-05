import * as React from 'react'
import { Action } from 'typescript-fsa'

import { State } from '../../types'

import * as operators from '../SpeechArea/operations'

import { connect } from 'react-redux'
import SpeechArea from '../SpeechArea'

export interface Actions {
  recording: () => Action<void>
}
type Props = Actions

class MainPage extends React.Component<Props> {
  componentDidMount() {
    this.props.recording()
  }
  render() {
    const { props } = this
    return (
      <div>
        <h4>SpeechArea</h4>
        <SpeechArea />
      </div>
    )
  }
}

const mapStateToProps = (appState: State) => ({})

const mapDispatchToProps = (dispatch: any) => {
  return {
    recording: () => dispatch(operators.recording()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)
