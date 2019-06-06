import React from 'react'

const LoginForm = (props) => (
    <div style={{ float: 'right' }}>
        {
            props.isConfirmed ?
                <span
                    className="font-weight-bolder"
                    style={{ margin: 20 + 'px' }}
                >
                    Administrator mode
                </span> :
                <form
                    className="form-inline"
                    style={{ flexWrap: 'nowrap' }}
                    onSubmit={(e) => { props.handleSubmit(e) }}
                >
                    <span style={{ color: 'red', fontSize: 'small' }}>{props.errMessage}</span>
                    <div className="form-group mb-2" style={{ width: 155 + "px" }}>
                        <input
                            style={{ width: 100 + "%" }}
                            type="text"
                            className="form-control"
                            id="inputText2"
                            placeholder="Name = admin"
                            autoComplete="off"
                            required
                            value={props.userName}
                            onChange={(e) => { props.onChangeLoginData(e.target.value, props.userPassword) }}
                        />
                    </div>
                    <div className="form-group mx-sm-3 mb-2" style={{ width: 155 + "px" }}>
                        <input
                            style={{ width: 100 + "%" }}
                            type="password"
                            className="form-control"
                            id="inputPassword2"
                            placeholder="Password = 123"
                            required
                            value={props.userPassword}
                            onChange={(e) => { props.onChangeLoginData(props.userName, e.target.value) }}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <button type="submit" className="btn btn-dark">Login</button>
                    </div>
                </form>
        }
    </div>
)

export default LoginForm

