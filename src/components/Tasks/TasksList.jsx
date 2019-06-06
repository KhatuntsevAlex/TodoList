import React from 'react'
import Task from './Task/Task'


const TasksList = props => {
  let tasks = props.tasks.map(t =>
    <Task
      key={t.id}
      task={t}
      isConfirmed={props.isConfirmed}
      isTaskEditing={props.isTaskEditing}
      onTaskEdit={props.onTaskEdit}
      confirmChanges={props.confirmChanges}
      onTaskDataChange={props.onTaskDataChange}
    />
  )
  let {sortField, sortDirection} = props.sortData
  
  let SortDIrectionOf = (field) => sortField === field ? sortDirection : ''
  return (
    <table
      className="table table-hover table-dark"
      style={{ width: 65 + "%", float: 'left' }}
    >
      <thead>
        <tr>
          <th
            scope="col"
            style={{ whiteSpace: 'nowrap' }}
            onClick={() => props.onSort('id')}
          >
            {'Id '}
            <span style={{ fontSize: 'xx-small' }}>
              {SortDIrectionOf('id')}
            </span>
          </th>

          <th
            scope="col"
            style={{ whiteSpace: 'nowrap' }}
            onClick={() => props.onSort('username')}
          >
            {'Name '}
            <span style={{ fontSize: 'xx-small' }}>
              {SortDIrectionOf('username')}
            </span>
          </th>

          <th
            scope="col"
            style={{ whiteSpace: 'nowrap' }}
            onClick={() => props.onSort('email')}
          >
            {'Email '}
            <span style={{ fontSize: 'xx-small' }}>
              {SortDIrectionOf('email')}
            </span>
          </th>

          <th scope="col">Task</th>
          <th
            style={{ textAlign: 'center', width: 40 + 'px', whiteSpace: 'nowrap' }}
            scope="col"
            onClick={() => props.onSort('status')}
          >
            {'Status '}
            <span style={{ fontSize: 'xx-small' }}>
              {SortDIrectionOf('status')}
            </span>
          </th>

          <th
            scope="col"
            style={{ width: 60 + 'px', fontSize: 'xx-small', textAlign: 'center', color: 'lightgrey' }}
          >
            {!props.isConfirmed && 'For autorized only'}
          </th>

        </tr>
      </thead>
      <tbody>
        {tasks}
      </tbody>
    </table>
  )
}



export default TasksList