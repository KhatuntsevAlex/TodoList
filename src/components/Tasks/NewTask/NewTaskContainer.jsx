import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewTask from './NewTask';
import { getTasks } from '../../../redux/tasksList-reduser';
import { setTask, onNewTaskDataChange } from '../../../redux/newTask-reduser';


class NewTaskContainer extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let { newTaskName, newTaskEmail, newTaskText } = this.props.newTask;
        var form = new FormData();
        form.append("username", newTaskName);
        form.append("email", newTaskEmail);
        form.append("text", newTaskText);

        this.props.setTask(this.props.developer, form)
        this.props.getTasks(this.props.developer, this.props.currentPage, this.props.sortData)        
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
        currentPage: state.tasksData.currentPage,
        sortData: state.tasksData.sortData,
    }
)

let mapDispathToProps = { onNewTaskDataChange, setTask, getTasks }

export default connect(mapStateToProps, mapDispathToProps)(NewTaskContainer)
