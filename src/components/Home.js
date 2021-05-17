import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  // if (props.loggedInStatus === "NOT_LOGGED_IN") {
  if (false) {
    return (
      <button onClick={() => {location.href='/auth'}}>Go to log in</button>
    )
  } else {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {props.loggedInStatus}</h1>
        {/* <Link to="/auth">Authentication</Link> */}
      </div>
    );
  }
};

export default Home

// const Home = (props) => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <h1>Status: {props.loggedInStatus}</h1>
//       <Link to="/auth">Authentication</Link>
//       <button onClick={() => {location.href='/auth'}}>Test</button>
//     </div>
//   );
// };

// export default Home
