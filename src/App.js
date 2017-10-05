import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Authen from './Authen.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">User Authentication</h1>
        </header>
        <Authen />
      </div>
    );
  }
}

export default App;
