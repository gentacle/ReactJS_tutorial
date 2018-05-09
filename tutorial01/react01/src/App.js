import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import Asdf from './Asdf';
import './App.css';


const Qwer = (props)=>{
  return(
    <div>
      {props.children}
    </div>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hello: "helloss worlds!",
      value: ""
    };
    // console.log("constructor");
    this.clickFn = this.clickFn.bind(this);
    this.changeFn = this.changeFn.bind(this);
    this.submitFn = this.submitFn.bind(this);
  }

  componentDidMount(){
    // console.log("did Mount")
  }

  componentDidUpdate(prevProps,prevState){
    // console.log(prevState)
    // console.log(this.state)
    // console.log(`${prevState.hello}가 ${this.state.hello} 로 바뀌었습니다!`);
  }

  clickFn(){
    this.setState({
      hello:"hello react"
    })
  }
  changeFn(e){
    this.setState({
      value:e.target.value
    });
  }

  submitFn(e){
    e.preventDefault()
    console.log(this.state.value);
  }

  render() {

    const { hello } = this.state;

    return (
      <div className="App">
        <form onSubmit={(e)=>{this.submitFn(e)}} >
          <input type="text" onChange={(e)=>{this.changeFn(e)}} />
          <button type="submit">asssdf</button>
        </form>
        <Asdf qwer = { hello } changeString = { this.clickFn } />

        <Qwer>
          <h1>{ hello }</h1>
        </Qwer>
        <button type="button" onClick={this.clickFn} >click Me!</button>
      </div>
    );
  }
}
export default hot(module)(App);

