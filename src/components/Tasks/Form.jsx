import React from 'react'

const Form = props => (
    <div className="card" style={{ width: 50 + '%', margin: 'auto' }}>
        <h5 className="card-header info-color white-text text-center py-4">
            <strong>ADD TASK</strong>
        </h5>
        <div className="card-body px-lg-5 pt-0">
            <form className="text-center" style={{ color: '#' + 757575 }}  method='post'  onSubmit={(e) => { props.handleSubmit(e) }}>
                <div className="md-form mt-3">
                    <input
                        type="text"
                        id="materialContactFormName"
                        className="form-control"
                        autoComplete="off"
                        required
                        placeholder='Enter your name'
                        value={props.newTaskName}
                        onChange={(e) => props.onNewTaskDataChange(e.target.value, props.newTaskEmail, props.newTaskText)}
                    />
                    <label htmlFor="materialContactFormName">Name</label>
                </div>
                <div className="md-form">
                    <input
                        type="email"
                        id="materialContactFormEmail"
                        className="form-control"
                        autoComplete="off"
                        placeholder='123@example.com'
                        required
                        value={props.newTaskEmail}
                        onChange={(e) => props.onNewTaskDataChange(props.newTaskName, e.target.value, props.newTaskText)}
                    />
                    <label htmlFor="materialContactFormEmail">E-mail</label>
                </div>
                <div className="md-form">
                    <textarea
                        id="materialContactFormMessage"
                        className="form-control md-textarea"
                        rows="3"
                        placeholder='Enter your task'
                        required
                        value={props.newTaskText}
                        onChange={(e) => props.onNewTaskDataChange(props.newTaskName, props.newTaskEmail, e.target.value)}                        
                    />
                    <label htmlFor="materialContactFormMessage">Task</label>
                </div>
                <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">ADD TASK</button>
            </form>
        </div>
    </div>
)

export default Form