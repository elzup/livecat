import * as React from "react";
import { Action } from "typescript-fsa";
import { ResultRecord } from "../../types";
import { State } from "../../containers/SpeechArea/reducer";
import { Actions } from "../../containers/SpeechArea";

export type Props = State & Actions;

const SpeechArea: React.SFC<Props> = (props: Props) => {
  return (
    <div>
      {props.records.map(record => (
        <p>{record.text}</p>
      ))}
    </div>
  );
};

export default SpeechArea;
