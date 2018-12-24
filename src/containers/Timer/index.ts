import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Action } from "typescript-fsa";
import { actions } from "./actions";
import Counter from "../../components/Counter";
import { AppState } from "../../state";
import { State } from "./reducer";

export interface Actions {
  updateValue: (v: string) => Action<string>;
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.counter);
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
  return {
    updateValue: (v: string) => dispatch(actions.updateValue(v))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
