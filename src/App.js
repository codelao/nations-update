import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Dynoment from './pages/Dynoment'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Route path ="/" component={Dynoment}></Route>
      </Router>
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
