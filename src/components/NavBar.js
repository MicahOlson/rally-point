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
      <div>Logo | <Link to="/">Home</Link> | Contact Us | Organization | <Link to="/auth">Log In</Link></div>
    )
  } else {
    return (
      <div>Logo | <Link to="/">Home</Link> | Contact Us | Organization | <span onClick={() => handleLogoutClick()}>Log Out</span></div>
    )
  }
}

export default NavBar
