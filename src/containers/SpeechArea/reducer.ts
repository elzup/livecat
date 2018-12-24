import { reducerWithInitialState } from "typescript-fsa-reducers";
import { actions } from "./actions";
import { ResultRecord } from "../../types";

export interface State {
  records: ResultRecord[];
}

const initialState: State = {
  records: []
};

export const reducer = reducerWithInitialState(initialState).case(
  actions.addRecord,
  (state, record) => {
    return { ...state, records: [...state.records, record] };
  }
);
