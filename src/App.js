import React from "react";
import TasksListContainer from "./components/Tasks/TaskListContainer";
import LoginFormContainer from "./components/Login/LoginFormContainer";
import NewTaskContainer from "./components/Tasks/NewTask/NewTaskContainer";
import PaginationContainer from "./components/Tasks/Pagination/PaginationContainer";

const App = () =>    
 
    <div>
      <LoginFormContainer />
      <PaginationContainer />
      <div style={{ display: "inline-block", marginTop: 20 + "px", width: 100 + '%' }}>
        <TasksListContainer />
        <NewTaskContainer />
      </div>
    </div>
 


export default App;
