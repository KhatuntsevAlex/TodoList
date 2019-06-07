import { connect } from 'react-redux'
import React, { Component } from 'react'
import TasksList from './TasksList'
import { setTasks, setTotalTaskCount, onSort, onTaskEdit, onTaskDataChange } from '../../redux/tasksList-reduser';
import { Zoom } from 'react-preloaders'
import $ from 'jquery'
import { getTasks, setTaskChanges } from '../../api/api';

class TasksListContainer extends Component {
   
    componentDidMount() {
        let { sortField, sortDirection } = this.props.sortData
        getTasks(this.props.developer, this.props.currentPage, sortField, sortDirection)
            .then(data => {
                if (data.status === 'ok')
                    this.props.setTasks(data.message.tasks);
                this.props.setTotalTaskCount(data.message.total_task_count);
            });
    }

    confirmChanges = (id) => {
        let that = this;       
        let {text, status} = this.props.tasks.find(task => task.id===id)        
        $(document).ready(function () {
            var form = new FormData();
            form.append("text", text);
            form.append("status", status);
            form.append("token", that.props.token);            
            setTaskChanges(that.props.developer, form, id)
                .then(data => {
                    if (data.status === 'ok')
                        that.props.onTaskEdit(id, false)
                })
        });
    }

    render() {
        return <>
            {
                this.props.isFetching ? <Zoom /> :
                    <TasksList
                        tasks={this.props.tasks}
                        onSort={this.props.onSort}
                        sortData={this.props.sortData}
                        isConfirmed={this.props.isConfirmed}
                        onTaskEdit={this.props.onTaskEdit}
                        confirmChanges={this.confirmChanges}
                        onTaskDataChange={this.props.onTaskDataChange}

                    />
            }
        </>
    }
}

let mapStateToProps = state => (
    {
        tasks: state.tasksData.tasks,
        developer: state.tasksData.developer,
        currentPage: state.tasksData.currentPage,
        isFetching: state.tasksData.isFetching,
        sortData: state.tasksData.sortData,
        isConfirmed: state.login.isConfirmed,
        token: state.login.token,

    }
)

let mapDispathToProps = { setTasks, setTotalTaskCount, onSort, onTaskEdit, onTaskDataChange }

export default connect(mapStateToProps, mapDispathToProps)(TasksListContainer)