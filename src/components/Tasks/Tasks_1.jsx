import React from 'react'
import Form from './Form'
import ReactPaginate from 'react-paginate'

const Tasks = props => {
  let pageCount = Math.ceil(props.totalTaskCount / props.pageSize)

return (
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
              Todo {props.sortField === 'text' ? <small>{props.sortType}</small> : null}
            </th>
            {/* <th onClick={props.onSort.bind(null, 'status')}>Status</th> */}
          </tr>
        </thead>
        <tbody>
          {props.tasks.map(task => (
            <tr>
              <th>{task.username}</th>
              <td>{task.email}</td>
              {/* <td contenteditable='true' onChange={(e)=>props.updateTaskText(task.id, e.target.text)}>{task.text}</td> */}
              {/* <td><input type="text" value={task.text}/></td> */}
              {/* <td><input type='text' value={task.text} onChange={e => props.updateTaskText(task.id, e.target.value)} /></td> */}
              <td><input className="form-control" type="text" onChange={e => props.updateTaskText(task.id, e.target.value)} value={task.text} /></td>

            </tr>))}
        </tbody>
      </table>
      {
        props.totalTaskCount > 3 ?
          <ReactPaginate
            previousLabel={'<-'}
            nextLabel={'->'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={props.onPageChanged}
            containerClassName={'pagination'}
            activeClassName={'active'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            nextClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextLinkClassName={'page-link'}
            
          /> : null
      }

      <Form />
    </div >
  )
}

export default Tasks