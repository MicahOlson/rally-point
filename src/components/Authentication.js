import React, { Component } from 'react'
import Registration from './auth/Registration'

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.handleAuthSuccess = this.handleAuthSuccess.bind(this);
  }
  
  handleAuthSuccess(data) {
    this.props.handleLogin(data);
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h1>Authentication</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Registration handleAuthSuccess={this.handleAuthSuccess}/>
      </div>
    )
  }
}

export default Authentication
