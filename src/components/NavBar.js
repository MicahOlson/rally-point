import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
      <div><Link to="/">Home</Link> | <a href="/#contact">Contact Us</a> | <Link to="/login">Log In</Link></div>
    )
  } else {
    return (
      <div><Link to="/">Home</Link> | <a href="/#contact">Contact Us</a> | Organization | Hi, {props.user.first_name} | <a href="" onClick={() => handleLogoutClick()}>Log Out</a></div>
    )
  }
}

export default NavBar
