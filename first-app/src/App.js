import React, { Component } from 'react';
import { render } from 'react-dom';
import Greeting from './components/Greeting';
import logo from './logo.svg';
import './scss/theme.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />

          <h1 className="app-title">Welcome to React</h1>
        </header>
        <Greeting />
      </div>
    );
  }
}

export default App;
