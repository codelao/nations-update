import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import Dynoment from './pages/Dynoment'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Dynoment/>
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
