import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const RegistrationWrapper = styled.section`
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

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault(event);
    const {
      email,
      password,
      password_confirmation
    } = this.state;

    axios.post(`http://localhost:3000/organizations/${this.props.organizationId}/users`, {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    },
      { withCredentials: true }
    ).then(response => {
      if (response.data.status === "created") {
        document.querySelector("#confirmation").innerHTML = `${response.data.user.email} has been successfully registered.`
      }
    }).catch(error => {
      console.log("registration error", error);
    })
  }

  render() {
    return (
      <RegistrationWrapper>
        <h2>Register a new member</h2>
        <div>
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
            <input
              type="password"
              name="password_confirmation"
              placeholder="Password confirmation"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
              required
            />
            <button type="submit">Register</button>
          </form>
          <p id="confirmation"></p>
        </div>
      </RegistrationWrapper>
    );
  }
}

export default Registration
