import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Zoom } from 'react-preloaders'
import TasksList from './TasksList'
import {
  setTotalTaskCount,
  onSort,
  onTaskEdit,
  onTaskDataChange,
  getTasks,
  updateTask,
} from '../../redux/tasksList-reduser'
import s from './TaskList.module.css'

class TasksListContainer extends Component {

  componentDidMount() {
    this.props.getTasks(this.props.developer, this.props.currentPage, this.props.sortData)
  }

  confirmChanges = (id) => {
    const that = this
    const { text, status } = this.props.tasks.find(task => task.id === id)
    const form = new FormData()
    form.append("text", text)
    form.append("status", status)
    form.append("token", that.props.token)
    that.props.updateTask(that.props.developer, form, id)
  }

  render() {
    return <>
      <div className={s.name}>
        <span
          className={s.developer}
          style={{ textTransform: 'capitalize' }}
        >
          {`${this.props.developer}'s`}
        </span> todo list
            </div>
      <div className={s.task_list}>
        {
          this.props.isFetching ?
            <Zoom /> :
            <TasksList
              tasks={this.props.tasks}
              onSort={this.props.onSort}
              sortData={this.props.sortData}
              isConfirmed={this.props.isConfirmed}
              onTaskEdit={this.props.onTaskEdit}
              confirmChanges={this.confirmChanges}
              onTaskDataChange={this.props.onTaskDataChange}
              isTaskEditing={this.props.isTaskEditing}
            />
        }
      </div>
    </>
  }
}

const mapStateToProps = state => (
  {
    tasks: state.tasksData.tasks,
    developer: state.tasksData.developer,
    currentPage: state.tasksData.currentPage,
    isFetching: state.tasksData.isFetching,
    isTaskEditing: state.tasksData.isTaskEditing,
    sortData: state.tasksData.sortData,
    isConfirmed: state.login.isConfirmed,
    token: state.login.token,
  }
)

const mapDispathToProps = { setTotalTaskCount, onSort, onTaskEdit, onTaskDataChange, getTasks, updateTask }

export default connect(mapStateToProps, mapDispathToProps)(TasksListContainer)