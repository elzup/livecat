import * as React from "react";
import { Actions } from "../../containers/SpeechArea";
import { State } from "../../containers/SpeechArea/reducer";
import { Action } from "typescript-fsa";

// export type Props = State & Actions;
export type Props = {
  value: string;
  updateValue: (v: string) => Action<string>;
  recording: () => Action<void>;
};

const SpeechArea: React.SFC<Props> = (props: Props) => {
  return <div>{props.value}</div>;
};

export default SpeechArea;
