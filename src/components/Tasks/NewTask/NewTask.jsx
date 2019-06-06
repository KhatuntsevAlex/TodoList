import React from 'react'

const NewTaskForm = props => {
    let { id, newTaskName, newTaskEmail, newTaskText, status } = props.newTask
    return (
        <div className="card" style={{ width: 30 + '%', float: 'right', margin: 0 }}>
            <h5 className="card-header info-color white-text text-center py-4">
                <strong>ADD TASK</strong>
            </h5>
            <div className="card-body px-lg-5 pt-0">
                <form className="text-center" style={{ color: '#' + 757575 }} onSubmit={(e) => { props.handleSubmit(e) }}>
                    <div className="md-form mt-3">
                        <input
                            type="text"
                            id="materialContactFormName"
                            className="form-control"
                            /* style={props.response.status !== 'ok' ? { borderColor: 'red' } : { borderColor: 'default' }} */
                            autoComplete="off"
                            /* required */
                            placeholder='Enter your name'
                            value={newTaskName}
                            onChange={(e) => props.onNewTaskDataChange(e.target.value, newTaskEmail, newTaskText)}
                        />
                        <label
                            htmlFor="materialContactFormName"
                        /*  style={props.response.status !== 'ok' ? { color: 'red' } : { color: 'default' }} */
                        >
                            {/* props.response.status === 'ok' ?  */'Name' /* : props.response.message.username */}
                        </label>
                    </div>
                    <div className="md-form">
                        <input
                            type="email"
                            id="materialContactFormEmail"
                            className="form-control"
                            /*  style={props.response.status !== 'ok' ? { borderColor: 'red' } : { borderColor: 'default' }} */
                            autoComplete="off"
                            /* required */
                            placeholder='123@example.com'
                            value={newTaskEmail}
                            onChange={(e) => props.onNewTaskDataChange(newTaskName, e.target.value, newTaskText)}
                        />
                        <label
                            htmlFor="materialContactFormEmail"
                        /* style={props.response.status !== 'ok' ? { color: 'red' } : { color: 'default' }} */
                        >
                            {/* props.response.status === 'ok' ? */ 'E-mail' /* : props.response.message.email */}
                        </label>
                    </div>
                    <div className="md-form">
                        <textarea
                            id="materialContactFormMessage"
                            className="form-control md-textarea"
                            /* style={props.response.status !== 'ok' ? { borderColor: 'red' } : { borderColor: 'default' }} */
                            rows="3"
                            placeholder='Enter your task'
                            /* required */
                            value={newTaskText}
                            onChange={(e) => props.onNewTaskDataChange(newTaskName, newTaskEmail, e.target.value)}
                        />
                        <label
                            htmlFor="materialContactFormMessage"
                        /* style={props.response.status !== 'ok' ? { color: 'red' } : { color: 'default' }} */
                        >
                            {/* props.response.status === 'ok' ? */'Todo'/* : props.response.message.text */}
                        </label>
                    </div>

                    <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">ADD TASK</button>
                </form>
            </div>
        </div>
    )
}

export default NewTaskForm