import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './Home'
import Authentication from './Authentication'
import NavBar from './NavBar'
import MemberControl from './members/MemberControl'
import EventControl from './events/EventControl'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      orgName: "",
      user: {}
    }
    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  checkLoginStatus = () => {
    axios.get("http://localhost:3000/logged_in", { withCredentials: true })
      .then(response => {
        if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          })
        } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          })
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount = () => {
    this.checkLoginStatus();
  }

  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }

  // handleGettingOrganizationName = (orgId) => {
  //   axios.get(`http://localhost:3000/organizations/${orgId}`, { withCredentials: true })
  //     .then(response => {
  //       if (response.status === 200) {
  //         this.setState({
  //           orgName: response.data.name
  //         });
  //       }
  //     })
  //     .catch(error => {
  //       console.log("get org name error", error);
  //     });
  // }

  render() {
    return (
      <div className='app'>
        <Router>
          <NavBar
            handleLogout={this.handleLogout}
            loggedInStatus={this.state.loggedInStatus}
            user={this.state.user}
            // handleGettingOrganizationName={this.handleGettingOrganizationName}
            // orgName={this.state.orgName}
          />
          <Switch>
            <Route
              exact
              path={"/"}
              render={props => (
                <Home
                  {...props}
                  // handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/login"}
              render={props => (
                <Authentication
                  {...props}
                  user={this.state.user}
                  handleLogin={this.handleLogin}
                  // handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/app"}
              render={props => (
                <MemberControl
                  {...props}
                  user={this.state.user}
                />
                // <EventControl
                //   {...props}
                //   user={this.state.user}
                // />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App
