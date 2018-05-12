import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import Event from './features/event/components/Event';
import { actions as eventActions } from './features/event/reducers';

import './App.css';

// App 클래스
class App extends Component {
  constructor(props){
    super(props)
    this.clickFn = this.clickFn.bind(this);
  }
  clickFn(){
    this.props.setTitleString()
  }
  render() {
    return (
      <div className="App">
        <Event />
        <button onClick={this.clickFn}>set Title</button>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitleString: (id) => dispatch(eventActions.setTitleString(id))
  }
}

App = connect(null, mapDispatchToProps )(App);

export default hot(module)(App);

