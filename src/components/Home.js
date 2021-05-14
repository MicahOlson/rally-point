import React from 'react'

const Home = props => {
  return (
    <div>
      <h1>Home</h1>
      <h1>Status: {props.loggedInStatus}</h1>
    </div>
  );
};

export default Home
