import React from 'react'

const TasksListItem = ({
  task: { id, username, email, text, status, isTaskEditing },
  onTaskDataChange,
  isConfirmed,
  confirmChanges,
  onTaskEdit,
}) => {
  return (
    <tr>
      {/* <th scope="row">{id}</th> */}
      <td style={{ whiteSpace: "nowrap" }}>{username}</td>
      <td>{email}</td>
      <td>
        {
          isTaskEditing
            ? <textarea
              rows="2"
              style={{ width: "100%" }}
              onChange={(e) => onTaskDataChange(e.target.value, status, id)}
              value={text}
            />
            : text
        }
      </td>
      <td style={{ verticalAlign: "middle", textAlign: "center" }}>

        {isTaskEditing
          ? <input
            type="text"
            maxLength="2"
            style={{ width: "100%", height: "100%", textAlign: "center" }}
            onChange={(e) => onTaskDataChange(text, e.target.value, id)}
            value={status}
          />
          : status === 10
            ? <span style={{ color: "green", fontSize: "x-large" }}>&#10004;</span>
            : <span style={{ color: "red", fontSize: "x-large" }}>&#10008;</span>
        }
      </td>
      <td style={{ whiteSpace: "nowrap", verticalAlign: "middle", textAlign: "center" }}>

        <button
          type="button"
          className={isConfirmed ? "btn btn-primary btn-sm" : "btn btn-secondary btn-sm"}
          disabled={!isConfirmed}
          onClick={isTaskEditing ?
            () => confirmChanges(id) :
            () => onTaskEdit(id, true)
          }
        >
          {isTaskEditing ?
            'Ok' :
            <>Edit <span style={{ fontSize: "larger" }}>&#9998;</span></>
          }
        </button>
      </td>
    </tr >
  )

}


export default TasksListItem