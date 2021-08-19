import blogReducer from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  blog: blogReducer,
});

export default rootReducer;
