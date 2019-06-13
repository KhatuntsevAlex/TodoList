import React from 'react'

const Task = props => {
    let { id, username, email, text, status, isTaskEditing } = props.task
    return (
        <tr>
            <th scope="row">{id}</th>
            <td style={{ whiteSpace: "nowrap" }}>{username}</td>
            <td>{email}</td>
            <td>
                {
                    isTaskEditing ?
                        <textarea                         
                        rows="2"
                        style={{width: 100 + '%'}}                           
                            onChange={(e) => props.onTaskDataChange(e.target.value, status, id)}
                            value={text} /> :
                        text
                }
            </td>
            <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                    {isTaskEditing ?
                        <input
                            type='text'
                            maxLength='2'
                            style={{ width: 100 + '%', height: 100 + '%', textAlign: 'center' }}
                            onChange={(e) => props.onTaskDataChange(text, e.target.value, id)}
                            value={status}
                        /> :
                        status ?
                        <span style={{color: 'green', fontSize: 'x-large'}}>&#10004;</span>:
                        <span style={{color: 'red', fontSize: 'x-large'}}>&#10008;</span>
                    }
            </td>
            <td style={{ whiteSpace: "nowrap", verticalAlign: 'middle', textAlign: 'center' }}>

                <button
                    className={props.isConfirmed ? "btn btn-primary btn-sm" : "btn btn-secondary btn-sm"}
                    disabled={!props.isConfirmed}
                    onClick={isTaskEditing ?
                        () => props.confirmChanges(id) :
                        () => props.onTaskEdit(id, true)
                    }
                >
                    {isTaskEditing ?
                        'Ok' :
                        <>Edit <span style={{ fontSize: 'larger' }}>&#9998;</span></>
                    }
                </button>
            </td>
        </tr >
    )

}


export default Task