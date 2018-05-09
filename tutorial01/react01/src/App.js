import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import App2 from './App2';
import AppTest from './AppTest';
import './App.css';


const BodyText = (props)=>{
  return(
    <div>
      {props.children}
    </div>
  )
}

class App extends Component {
  //컨스트럭터 정의(프롭스 받아옴)
  constructor(props){
    super(props); //부모의 프롭스 받아서 정의
    this.state = {
      hello: "hello worlds!",
      hell: "헬조선!",
      value: "" //벨류 초기화
    };
    //기동확인 콘솔
    console.log(props.state);


    //자체적으로 바인딩해서 사용가능하게 설정
    this.clickFn = this.clickFn.bind(this);
    this.clickFn2 = this.clickFn2.bind(this);
    this.changeFn = this.changeFn.bind(this);
    this.submitFn = this.submitFn.bind(this);
  }

  //라이프사이클
  componentDidMount(){
    // console.log("did Mount")
  }

  componentDidUpdate(prevProps,prevState){
    // console.log(prevState)
    // console.log(this.state)
    console.log(`${prevState.hello} => ${this.state.hello}`);
  }

  //클릭시 이벤트
  clickFn(){
    this.setState({
      hello:"텍스트 변화!"
    })
  }

  clickFn2(){
    this.setState({
      hello:"텍스트 변화 두번째!"
    })
  }

  //변화시 이벤트
  changeFn(e){
    this.setState({
      value:e.target.value
    });
  }

  //보내기시 이벤트
  submitFn(e){
    e.preventDefault()
    console.log(this.state.value);
  }

  //마우스 올렸을때 이벤트
  blankFn(e){
    console.log("칸 선택");
  }



  render() {
    //자체저장되있는 hello 키를 가진 스테이트 정의
    const { hello } = this.state;
    const { hell } = this.state;

    return (
      <div className="App">
        <form onSubmit={(e)=>{this.submitFn(e)}} >
          <input type="text" onChange={(e)=>{this.changeFn(e)}} />
          <button type="submit">송출</button>
        </form>
        <App2 propsName = { hello } changeString = { this.clickFn } /> 
        <App2 propsName = { hell } changeString = { this.clickFn2 } />

        <BodyText>
          <h2>{ hello }</h2>
        </BodyText>
        <button type="button" onClick={this.clickFn} >또다른 버튼</button>

        
        <AppTest>
        </AppTest>





      </div>

    );
  }
}




export default hot(module)(App);

