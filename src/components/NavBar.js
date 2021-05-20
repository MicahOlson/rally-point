import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from './../../static/assets/imgs/rally-arrow.png'

const NavBarWrapper = styled.section`
  color: #DAD7CD;
  font-size: 24px;
  text-align: right;
  background-color: #32566E;
  border-radius: 10px;
  position: fixed;
  width: 95%;
  margin: auto;
  padding: 20px;
  margin: 10px;
  li {
    list-style-type: none;
    margin-left: 5px;
  }
  img {
    height: 95px;
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 40px;
    margin-left: 40px;
  }
  div {
    margin-top: 35px;
    margin-bottom: 35px;
  }
  p {
    position: fixed;
    top: 0;
    right: 0;
    font-size: 16px;
    font-style: italic;
    margin: 30px 60px 0px 0px;
  }
  span {
    background-color: #9E2A2B;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px;
  }
  a:link, a:visited {
    text-decoration: none;
    color: #DAD7CD;
  }
  a:hover {
    color: #9882AC;
  }
`
// position: fixed;
// top: 0;

const NavBar = props => {
  const handleLogoutClick = () => {
    axios.delete("http://localhost:3000/logout", { withCredentials: true })
      .then(response => {
        props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      })
  }

  if (props.loggedInStatus === "NOT_LOGGED_IN") {
    return (
      <NavBarWrapper>
        <div>
          <span>
            <a href="/#contact">Contact Us</a>
          </span>
          <span>
            <Link to="/auth">Log In</Link>
          </span>
        </div>
        <a href="/"><img src={logo} alt=""></img></a>
      </NavBarWrapper>
    )
  } else if (props.user.admin) {
    return (
      <NavBarWrapper>
        <p>
          Welcome, {props.user.first_name} &#64;{props.orgName}!
        </p>
        <div>
          <span>
            <a href="/#contact">Contact Us</a>
          </span>
          <span>
            <Link to="/events">{props.orgName} Notifications</Link>
          </span>
          <span>
            <Link to="/members">Members Status</Link>
          </span>
          <span>
            <Link to="/auth">Add Members</Link>
          </span>

          <span>
            <a href="/" onClick={() => handleLogoutClick()}>Log Out</a>
          </span>
        </div>
        <a href="/"><img src={logo} alt=""></img></a>
      </NavBarWrapper>
    )
  } else {
    return (
      <NavBarWrapper>
        <p>
          Welcome, {props.user.first_name} &#64;{props.orgName}!
        </p>
        <div>
          <span>
            <a href="/#contact">Contact Us</a>
          </span>
          <span>
            <Link to="/events">{props.orgName} Notifications</Link>
          </span>
          <span>
            <Link to="/members">Members Status</Link>
          </span>
          <span>
            <a href="/" onClick={() => handleLogoutClick()}>Log Out</a>
          </span>
        </div>
        <a href="/"><img src={logo} alt=""></img></a>
      </NavBarWrapper>
    )
  }
}

export default NavBar
