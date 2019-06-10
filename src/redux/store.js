import { createStore, combineReducers, applyMiddleware } from "redux";
import tasksReducer from "./tasksList-reduser";
import loginReduser from "./login-reduser";
import NewTaskReducer from "./newTask-reduser";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
  tasksData: tasksReducer,
  login: loginReduser,
  newTask: NewTaskReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;