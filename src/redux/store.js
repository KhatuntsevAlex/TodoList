import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import tasksReducer from './tasksList-reduser'
import loginReduser from './login-reduser'
import NewTaskReducer from './newTask-reduser'

const reducers = combineReducers({
  tasksData: tasksReducer,
  login: loginReduser,
  newTask: NewTaskReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store