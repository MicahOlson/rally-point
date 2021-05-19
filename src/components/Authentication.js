import React, { Component } from 'react'
import axios from 'axios'
import Registration from './auth/Registration'
import Login from './auth/Login'

class Authentication extends Component {
  constructor(props) {
    super(props);
  }

  handleAuthSuccess = (data) => {
    this.props.handleLogin(data);
    this.props.history.push("/events");
  }

  handleLogoutClick = () => {
    axios.delete("http://localhost:3000/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      })
  }

  render() {
    if ((Object.entries(this.props.user).length != 0) && (this.props.user.admin)) {
      return (
        <div>
          <Registration
            // handleAuthSuccess={this.handleAuthSuccess}
            organizationId={this.props.user.organization_id}
            />
        </div>
      )
    } else if (Object.entries(this.props.user).length != 0) {
      console.log(this.props.user);
      return (
        <div>
          <h1>Status: {this.props.loggedInStatus}</h1>
          <p>You are already logged in.</p>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Status: {this.props.loggedInStatus}</h1>
          {/* <button onClick={() => handleLogoutClick}>Log out</button> */}
          <Login handleAuthSuccess={this.handleAuthSuccess} />
        </div>
      )
    }
  }
}

export default Authentication
