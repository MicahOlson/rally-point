import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarWrapper = styled.section`
  background-color: #000000;
  width: 100%;
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  padding-top: 24px;
  padding-bottom: 24px;
`

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

  // props.handleGettingOrganizationName(props.user.organization_id)

  if (props.loggedInStatus === "NOT_LOGGED_IN") {
    return (
      // <NavBarWrapper>
        <div><Link to="/">Home</Link> | <a href="/#contact">Contact Us</a> | <Link to="/login">Log In</Link></div>
      // </NavBarWrapper>
    )
  } else {
    return (
      // <NavBarWrapper>
        <div><Link to="/">Home</Link> | <a href="/#contact">Contact Us</a> | <Link to="/app">{props.orgName}</Link> | Hi, {props.user.first_name} | <a href="" onClick={() => handleLogoutClick()}>Log Out</a></div>
      // </NavBarWrapper>
    )
  }
}

export default NavBar
