import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Authentication from './Authentication'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }
  
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route 
              exact 
              path={"/"} 
              render={props => (
                <Home {...props} loggedInStatus={this.state.loggedInStatus} />
              )} 
            />
            <Route 
              exact 
              path={"/auth"} 
              render={props => (
                <Authentication {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App
