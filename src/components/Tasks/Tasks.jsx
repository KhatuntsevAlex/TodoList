import React from 'react'
import Form from './Form';

const Tasks = props => {
  return (
    <div >
      <div>
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th onClick={props.onSort.bind(null, 'username')}>
                Name {props.sortField === 'username' ? <small>{props.sortType}</small> : null}
              </th>
              <th onClick={props.onSort.bind(null, 'email')}>
                E-mail {props.sortField === 'email' ? <small>{props.sortType}</small> : null}
              </th>
              <th onClick={props.onSort.bind(null, 'text')}>
                Tasks {props.sortField === 'text' ? <small>{props.sortType}</small> : null}
              </th>
              {/* <th onClick={props.onSort.bind(null, 'status')}>Status</th> */}
            </tr>
          </thead>
          <tbody>
            {props.tasks.map(task => (
              <tr key={task.id}>
                <th>{task.username}</th>
                <td>{task.email}</td>
                {/* <td contenteditable='true' onChange={(e)=>props.updateTaskText(task.id, e.target.text)}>{task.text}</td> */}
                {/* <td><input type="text" value={task.text}/></td> */}
                {/* <td><input type='text' value={task.text} onChange={e => props.updateTaskText(task.id, e.target.value)} /></td> */}
                <td><input className="form-control" type="text" onChange={e => props.updateTaskText(task.id, e.target.value)} value={task.text} /></td>

              </tr>))}


          </tbody>
        </table>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {props.pages.map(p =>
            (<div key={p} onClick={() => props.onPageChanged(p)}>
              <li className="page-item"><a className="page-link" href='#'>{p}</a></li>
            </div>
            )
          )}
        </ul>
      </nav>
      <Form
        newTaskName={props.newTaskName}
        newTaskEmail={props.newTaskEmail}
        newTaskText={props.newTaskText}
        onNewTaskDataChange={props.onNewTaskDataChange}
        handleSubmit={props.handleSubmit}
      />
    </div >
  )
}

export default Tasks