import { connect } from 'react-redux'
import { Action } from 'typescript-fsa'
import Counter from '../../components/Counter'
import { AppState } from '../../store'
import { actions } from './actions'
import * as operators from './operations'

export interface Actions {
  updateValue: (v: string) => Action<string>
  addPrefix: () => Action<void>
}

const mapStateToProps = (appState: AppState) => {
  return { value: appState.counter.value }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateValue: (v: string) => dispatch(actions.updateValue(v)),
    addPrefix: () => dispatch(operators.addPrefix('___')),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
