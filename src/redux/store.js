import { createStore, combineReducers } from "redux";
import tasksReducer from "./tasks-reduser";

let reducers = combineReducers({
  tasksData: tasksReducer,
});

let store = createStore(reducers);

export default store;