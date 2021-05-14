import React, { Component } from 'react'
import axios from 'axios'
import Registration from './auth/Registration'
import Login from './auth/Login'

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.handleAuthSuccess = this.handleAuthSuccess.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  
  handleAuthSuccess(data) {
    this.props.handleLogin(data);
    this.props.history.push("/");
  }

  handleLogoutClick() {
    axios.delete("http://localhost:3000/logout", { withCredentials: true })
    .then(response => {
      this.props.handleLogout();
    })
    .catch(error => {
      console.log("logout error", error);
    })
  }

  render() {
    return (
      <div>
        <h1>Authentication</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogoutClick()}>Log out</button>
        <Registration handleAuthSuccess={this.handleAuthSuccess} />
        <Login handleAuthSuccess={this.handleAuthSuccess} />
      </div>
    )
  }
}

export default Authentication
