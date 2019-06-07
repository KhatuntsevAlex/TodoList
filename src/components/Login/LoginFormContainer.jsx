import React, { Component } from "react"
import LoginForm from "./LoginForm"
import { connect } from "react-redux"
import { setLoginData, onChangeLoginData } from "../../redux/login-reduser"
import $ from 'jquery'
import { login } from "../../api/api";

class LoginFormContainer extends Component {

  handleSubmit = e => {
    e.preventDefault()
    let that = this;
    $(document).ready(function () {
      let { userName, userPassword } = that.props;
      var form = new FormData();
      form.append("username", userName);
      form.append("password", userPassword);

      login(that.props.developer, form)
        .then(data => {
          if (data.status === 'ok') {
            that.props.setLoginData(data.message.token)
            that.props.onChangeLoginData('', '')
          }
        })
    })
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

let mapDispatchToProps = { setLoginData, onChangeLoginData }

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)

