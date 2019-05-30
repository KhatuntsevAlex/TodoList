import React, { Component } from "react";
import Tasks from "./components/Tasks/Tasks";
import {
  setCurrentPageAC,
  setTasksAC,
  onSortMeAC,
  updateTaskTextAC,
  setTotalTaskCountAC,
  onNewTaskDataChangeAC
} from "./redux/tasks-reduser";
import { connect } from "react-redux";
import * as axios from "axios";
import _ from "lodash";

class App extends Component {
  componentDidMount() {
    axios
      .get(
        `https://uxcandy.com/~shapoval/test-task-backend/v2?developer=${
          this.props.developer
        }&page=${this.props.page}&count=${this.props.pageSize}&sort_direction=${
          this.props.sortType
        }`
      )
      .then(response => {
        this.props.setTasks(response.data.message.tasks);
        this.props.setTotalTaskCount(response.data.message.tasks.length + 1);
      });
  }

  onPageChanged = p => {
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://uxcandy.com/~shapoval/test-task-backend/v2?developer=${
          this.props.developer
        }&page=${p}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setTasks(response.data.message.tasks);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(
        `https://uxcandy.com/~shapoval/test-task-backend/v2?developer=${
          this.props.developer
        }`,
        {
          username: this.props.newTaskName,
          email: this.props.newTaskEmail,
          text: this.props.newTaskText
        }
        /* `https://uxcandy.com/~shapoval/test-task-backend/v2?developer=${
          this.props.developer
        }&username=${this.props.newTaskName}&email=${this.props.newTaskEmail}&text=${this.props.newTaskText}` */
      )
      .then(response => {
        console.log(response.data);
      })
      .then(() => this.props.onNewTaskDataChange('', '', ''));
  };

  onSort = sortField => {
    let clonedTasks = [...this.props.tasks];
    let sortType = this.props.sortType === "asc" ? "desc" : "asc";
    let orderedTasks = _.orderBy(clonedTasks, sortField, sortType);

    this.props.setTasks(orderedTasks);
    this.props.onSortMe(sortType, sortField);
  };

  render() {
    let pageCount = Math.ceil(this.props.totalTaskCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return (
      <div className="container">
        <Tasks
          pages={pages}
          tasks={this.props.tasks}
          page={this.props.page}
          onPageChanged={this.onPageChanged}
          onSort={this.onSort}
          updateTaskText={this.props.updateTaskText}
          sortType={this.props.sortType}
          sortField={this.props.sortField}
          onNewTaskDataChange={this.props.onNewTaskDataChange}
          handleSubmit={this.handleSubmit}
          newTaskName={this.props.newTaskName}
          newTaskEmail={this.props.newTaskEmail}
          newTaskText={this.props.newTaskText}
        />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    tasks: state.tasksData.tasks,
    pageSize: state.tasksData.pageSize,
    totalTaskCount: state.tasksData.total_task_count,
    page: state.tasksData.page,
    developer: state.tasksData.developer,
    sortType: state.tasksData.sort_direction,
    sortField: state.tasksData.sort_field,
    newTaskName: state.tasksData.newTaskName,
    newTaskEmail: state.tasksData.newTaskEmail,
    newTaskText: state.tasksData.newTaskText
  };
};

let mapDispatchToProps = dispatch => {
  return {
    setTasks: tasks => dispatch(setTasksAC(tasks)),
    setCurrentPage: currentPage => dispatch(setCurrentPageAC(currentPage)),
    setTotalTaskCount: totalTaskCount =>
      dispatch(setTotalTaskCountAC(totalTaskCount)),
    onSortMe: (sortType, sortField) =>
      dispatch(onSortMeAC(sortType, sortField)),
    updateTaskText: (taskId, taskText) =>
      dispatch(updateTaskTextAC(taskId, taskText)),
    onNewTaskDataChange: (newTaskName, newTaskEmail, newTaskText) =>
      dispatch(onNewTaskDataChangeAC(newTaskName, newTaskEmail, newTaskText))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
