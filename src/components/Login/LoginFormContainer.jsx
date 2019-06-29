import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login, onChangeLoginData } from '../../redux/login-reduser'

class LoginFormContainer extends Component {

  handleSubmit = e => {
    e.preventDefault()
    const form = new FormData()
    form.append('username', this.props.userName)
    form.append('password', this.props.userPassword)

    this.props.login(this.props.developer, form)
  }

  render() {
    return <LoginForm
      userName={this.props.userName}
      userPassword={this.props.userPassword}
      onChangeLoginData={this.props.onChangeLoginData}
      handleSubmit={this.handleSubmit}
      isConfirmed={this.props.isConfirmed}
    />
  }
}

const mapStateToProps = state => {
  return {
    developer: state.tasksData.developer,
    userName: state.login.username,
    userPassword: state.login.password,
    errMessage: state.login.errMessage,
    isConfirmed: state.login.isConfirmed,
  }
}

const mapDispatchToProps = { onChangeLoginData, login }

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)

