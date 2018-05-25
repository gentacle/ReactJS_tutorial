import React, { Component } from 'react';
import { connect } from 'react-redux'

import { hot } from 'react-hot-loader'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       hello :D
      </div>
    );
  }
}

export default hot(module)(App)
