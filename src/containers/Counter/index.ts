import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actions } from "./actions";
import Counter from "../../components/Counter";
import { AppState } from "../../state";
import { Action, AnyAction } from "typescript-fsa";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import * as operators from "./operators";

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
