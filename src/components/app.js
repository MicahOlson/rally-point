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
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    })
    this.handleGettingOrganizationName(data.user.organization_id)
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

  handleGettingOrganizationName = (orgId) => {
    axios.get(`http://localhost:3000/organizations/${orgId}`, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          this.setState({
            orgName: response.data.name
          });
          console.log(this.state.orgName);
        }
      })
      .catch(error => {
        console.log("get org name error", error);
      });
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <NavBar
            handleLogout={this.handleLogout}
            loggedInStatus={this.state.loggedInStatus}
            user={this.state.user}
            orgName={this.state.orgName}
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
              path={"/auth"}
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
              path={"/members"}
              render={props => (
                <MemberControl
                  {...props}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path={"/events"}
              render={props => (
                <EventControl
                  {...props}
                  user={this.state.user}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App
