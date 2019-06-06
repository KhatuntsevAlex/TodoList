import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewTask from './NewTask';
import $ from 'jquery'
import { addTask, setTasks, setTotalTaskCount } from '../../../redux/tasksList-reduser';
import { onNewTaskDataChange } from '../../../redux/newTask-reduser';
import * as axios from 'axios'
import { setTask, getTasks } from '../../../api/api';


class NewTaskContainer extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let that = this;
        $(document).ready(function () {
            let { newTaskName, newTaskEmail, newTaskText } = that.props.newTask;
            var form = new FormData();
            form.append("username", newTaskName);
            form.append("email", newTaskEmail);
            form.append("text", newTaskText);

            setTask(that.props.developer, form)
                .then(data => {
                    if (data.status === 'ok') {
/*                         that.props.addTask(data.message);
 */                        that.props.onNewTaskDataChange("", "", "");
                    }
                })
                .then(
                    getTasks(that.props.developer, that.props.currentPage, that.props.sortField, that.props.sortDirection)
                        .then(data => {
                            if (data.status === 'ok') {                                
                                that.props.setTasks(data.message.tasks);
                                that.props.setTotalTaskCount(data.message.total_task_count);
                            }
                        })
                )
        })
    }

    render() {
        return <NewTask
            newTask={this.props.newTask}
            handleSubmit={this.handleSubmit}
            onNewTaskDataChange={this.props.onNewTaskDataChange}
        />
    }

}

let mapStateToProps = state => (
    {
        newTask: state.newTask,
        developer: state.tasksData.developer,        
    }
)

let mapDispathToProps = { addTask, onNewTaskDataChange, setTotalTaskCount, setTasks }

export default connect(mapStateToProps, mapDispathToProps)(NewTaskContainer)
