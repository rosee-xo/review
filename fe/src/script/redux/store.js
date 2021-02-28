import { createStore } from 'redux';
import example from "./reducers/example";

export default createStore(
  combineReducers({
    example,
  }),
);
