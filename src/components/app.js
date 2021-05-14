import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Authentication from './Authentication'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/auth"} component={Authentication} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App
