import React, { Component } from "react"
import LoginForm from "./LoginForm"
import { connect } from "react-redux"
import { login, onChangeLoginData } from "../../redux/login-reduser"
import $ from 'jquery'

class LoginFormContainer extends Component {

  handleSubmit = e => {
    e.preventDefault()
      let { userName, userPassword } = this.props;
      var form = new FormData();
      form.append("username", userName);
      form.append("password", userPassword);

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

let mapStateToProps = state => {
  return {
    developer: state.tasksData.developer,
    userName: state.login.username,
    userPassword: state.login.password,
    errMessage: state.login.errMessage,
    isConfirmed: state.login.isConfirmed,
  };
}

let mapDispatchToProps = { onChangeLoginData, login }

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)

