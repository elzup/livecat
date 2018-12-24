import { connect } from "react-redux";
import { actions } from "./actions";
import Counter from "../../components/Counter";
import { AppState } from "../../store";
import { Action } from "typescript-fsa";
import * as operators from "./operations";

export interface Actions {
  updateValue: (v: string) => Action<string>;
  addPrefix: () => Action<void>;
}

const mapStateToProps = (appState: AppState) => {
  return { value: appState.counter.value };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateValue: (v: string) => dispatch(actions.updateValue(v)),
    addPrefix: () => dispatch(operators.addPrefix("___"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
