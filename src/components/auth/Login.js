import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const LoginWrapper = styled.section`
  h2 {
    color: #9E2A2B;
    font-size: 28px;
  }
  margin-top: 20px;
  margin-left: 100px;
  input {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
  }
`

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault(event);
    const { email, password } = this.state;
    axios.post("http://localhost:3000/sessions", {
      user: {
        email: email,
        password: password
      }
    },
      { withCredentials: true }
    ).then(response => {
      if (response.data.logged_in) {
        this.props.handleAuthSuccess(response.data);
      }
    }).catch(error => {
      console.log("login error", error);
    })
  }

  render() {
    return (
      <LoginWrapper>
        <div>
          <h2>Log In</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <button type="submit">Log in</button>
          </form>
        </div>
      </LoginWrapper>
    );
  }
}

export default Login
