import React from 'react'
import { Link } from 'react-router-dom'
import ContactUs from './ContactUs'

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <h1>Status: {props.loggedInStatus}</h1>
      {/* <Link to="/login">Authentication</Link> */}
      <ContactUs />
      <span id="contact-us-nav"></span>
    </div>
  )
};

export default Home

// const Home = (props) => {
//   // if (props.loggedInStatus === "NOT_LOGGED_IN") {
//   if (false) {
//     return (
//       <button onClick={() => { location.href = '/login' }}>Go to log in</button>
//     )
//   } else {
//     return (
//       <>
//         <div>
//           <h1>Home</h1>
//           <h1>Status: {props.loggedInStatus}</h1>
//           {/* <Link to="/login">Authentication</Link> */}
//         </div>
//         <div>
//           <ContactUs />
//         </div>
//       </>
//     );
//   }
// };

// export default Home

// const Home = (props) => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <h1>Status: {props.loggedInStatus}</h1>
//       <Link to="/login">Authentication</Link>
//       <button onClick={() => {location.href='/login'}}>Test</button>
//     </div>
//   );
// };

// export default Home
