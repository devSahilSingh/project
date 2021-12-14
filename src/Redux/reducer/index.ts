import { combineReducers } from "redux";
import Reducer from "./reducer";

const rootReducer = combineReducers({
  space: Reducer,
});

export default rootReducer;
