import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Dynoment from './pages/Dynoment'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Route {...props}
              path="/members" 
              render={props => (
                this.state.authenticated ?
                <Members {...props}/> : <Redirect to="/login"/>
              )}/>
        <Route path ="/path" component={Dynoment}></Route>
      </Router>
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
