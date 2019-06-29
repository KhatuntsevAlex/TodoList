import React from 'react'
import TasksListItem from './TasksListItem'


const TasksList = ({
  tasks,
  onSort,
  sortData: { sortField, sortDirection },
  onTaskEdit,
  isConfirmed,
  isTaskEditing,
  confirmChanges,
  onTaskDataChange,
}) => {
  const myTasks = tasks.map(t =>
    <TasksListItem
      task={t}
      key={t.id}
      onTaskEdit={onTaskEdit}
      isConfirmed={isConfirmed}
      isTaskEditing={isTaskEditing}
      confirmChanges={confirmChanges}
      onTaskDataChange={onTaskDataChange}
    />
  )

  const SortDIrectionOf = (field) => sortField === field ? sortDirection : ''
  return (
    <table
      className="table table-hover table-dark"
    >
      <thead>
        <tr>
          {/* <th
            scope="col"
            style={{ whiteSpace: "nowrap" }}
            onClick={() => onSort('id')}
          >
            {'Id '}
            <span style={{ fontSize: "xx-small" }}>
              {SortDIrectionOf('id')}
            </span>
          </th> */}
          <th
            scope="col"
            style={{ whiteSpace: "nowrap" }}
            onClick={() => onSort('username')}
          >
            {'Name '}
            <span style={{ fontSize: "xx-small" }}>
              {SortDIrectionOf('username')}
            </span>
          </th>
          <th
            scope="col"
            style={{ whiteSpace: "nowrap" }}
            onClick={() => onSort('email')}
          >
            {'Email '}
            <span style={{ fontSize: "xx-small" }}>
              {SortDIrectionOf('email')}
            </span>
          </th>
          <th scope="col">
            {'Task'}
          </th>
          <th
            style={{ textAlign: "center", width: "40px", whiteSpace: "nowrap" }}
            scope="col"
            onClick={() => onSort('status')}
          >
            {'Status '}
            <span style={{ fontSize: "xx-small" }}>
              {SortDIrectionOf('status')}
            </span>
          </th>
          <th
            scope="col"
            style={{ width: "60px", fontSize: "xx-small", textAlign: "center", color: "lightgrey" }}
          >
            {!isConfirmed && 'Administrator only'}
          </th>
        </tr>
      </thead>
      <tbody>
        {myTasks}
      </tbody>
    </table>
  )
}

export default TasksList