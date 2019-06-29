import React from 'react'

const LoginForm = ({
  userName,
  userPassword,
  onChangeLoginData,
  handleSubmit,
  isConfirmed,
}) => (
    <div style={{ lineHeight: '50px', textAlign: 'center' }}>
      {isConfirmed
        ? <span
          className="font-weight-bolder"
          style={{ color: 'green' }}>
          Administrator mode
        </span>
        : <form
          className="form-inline"
          style={{ flexWrap: 'nowrap' }}
          onSubmit={(e) => { handleSubmit(e) }}
        >
          <div className="form-group mb-2" style={{ width: '40%' }}>
            <input
              type="text"
              style={{ width: '100%' }}
              className="form-control"
              id="inputText2"
              placeholder="Name = admin"
              autoComplete="off"
              required
              value={userName}
              onChange={(e) => { onChangeLoginData(e.target.value, userPassword) }}
            />
          </div>
          <div className="form-group mb-2" style={{ width: '40%' }}>
            <input
              type="password"
              style={{ width: '100%', marginLeft: '5%', marginRight: '5%' }}
              className="form-control"
              id="inputPassword2"
              placeholder="Password = 123"
              required
              value={userPassword}
              onChange={(e) => { onChangeLoginData(userName, e.target.value) }}
            />
          </div>
          <div className="form-group mb-2" style={{ width: '20%' }}>
            <button
              type="submit"
              className="btn btn-dark"
              style={{ width: '100%', whiteSpace: 'nowrap' }}
            >
              Login
            </button>
          </div>
        </form>
      }
    </div>
  )

export default LoginForm

