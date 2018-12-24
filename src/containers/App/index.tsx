import * as React from "react";
import { Action } from "typescript-fsa";
import Counter from "../Counter";

export interface Actions {}

type Props = {};

const App: React.SFC<Props> = props => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
