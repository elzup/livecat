import * as React from "react";
import { connect } from "react-redux";
import { Action } from "typescript-fsa";

import { actions } from "./actions";
import { AppState } from "../../store";

import * as operators from "./operators";
import SpeechArea from "../../components/SpeechArea";

export interface Actions {
  updateValue: (v: string) => Action<string>;
  recording: () => Action<void>;
}

const mapStateToProps = (appState: AppState) => {
  return { value: appState.counter.value };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateValue: (v: string) => dispatch(actions.updateValue(v)),
    recording: () => dispatch(operators.recording())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeechArea);
