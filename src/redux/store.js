import { createStore, combineReducers } from "redux";
import tasksReducer from "./tasksList-reduser";
import loginReduser from "./login-reduser";
import NewTaskReducer from "./newTask-reduser";

let reducers = combineReducers({
  tasksData: tasksReducer,
  login: loginReduser,
  newTask: NewTaskReducer,
});

let store = createStore(reducers);

export default store;