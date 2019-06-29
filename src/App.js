import React from 'react'
import TasksListContainer from './components/Tasks/TaskListContainer'
import LoginFormContainer from './components/Login/LoginFormContainer'
import NewTaskContainer from './components/Tasks/NewTask/NewTaskContainer'
import PaginationContainer from './components/Tasks/Pagination/PaginationContainer'
import s from './App.module.css'

const App = () => (
  <div className={s.wrapper}>
    <div className={s.login}>
      <LoginFormContainer />
    </div>
    <div className={s.pagination}>
      <PaginationContainer />
    </div>    
      <TasksListContainer />  
    <div className={s.add_form}>
      <NewTaskContainer />
    </div>
  </div>
)

export default App
