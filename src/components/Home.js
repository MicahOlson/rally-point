import React from 'react'
import { Link } from 'react-router-dom'

const Home = props => {
  return (
    <div>
      <h1>Home</h1>
      <h1>Status: {props.loggedInStatus}</h1>
      <Link to="/auth">Authentication</Link>
    </div>
  );
};

export default Home
