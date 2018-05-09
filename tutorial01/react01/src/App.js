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

// App 클래스
class App extends Component {
  //컨스트럭터 정의(프롭스 받아옴)
  constructor(props){
    super(props); //부모의 프롭스 받아서 정의
    this.state = { //초기값 설정. 렌더링 후에 this.state 사용금지!
      hello: "hello worlds!",
      hell: "헬조선!",
      value: "", //벨류 초기화
      number: "6974",
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
          hello 라는 키를 가진 스테이트를 불러옴.
          <br/>
          이렇게 엔터하려면 br태그로 띄어야함<br/>
        </BodyText>
        <button type="button" onClick={this.clickFn} >또다른 버튼</button>

        
        <AppTest name="테스트앱" >
        테스트앱이라는 이름을 가지게 정의하고<br/>
        실행함. 다른 js문서라도 결국 가져와 붙이는것.<br/>
        차이점은 없음.
        </AppTest>

        <AppTest name={this.props.name}>
        this.props.name 을 name으로 지정했을 경우.<br/>
        index에 지정된 정보로 출력됨.<br/>
        이런 텍스트 전부가 자식인가?
        </AppTest>

        <div>
         <h1>Hello {this.props.name}</h1>

         <h2>{this.props.number}</h2>

         <h3>{this.props.children}</h3>
         
        </div>
        
      </div>
    );
  }
  // App의 벨류 초기화
  // 하지만 App클래스 내부에서 부모의 프롭스를 받아 스테이트화, 초기화를 하기때문에 의미 없음.
  // App.defaultProps = {
  //   value:100
  // };
  // App.propTypes = {
  //   name: propTypes.sting,
  //   number:propTypes.number,
  // };

};

// Counter 클래스
class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:0,
    };

    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick(){

    //이렇게 사용하지 말것.
    // this.state.value = this.state.value +1;
    // this.forceUpdate();

    this.setState({
      value:this.state.value +1,

    })
  }

  //handleClick()을 실행. setstate 실행, 변경. 다시 렌더 반복
  //최대로 실행되 에러
    render(){
    return(
      <div>
      <h2>{this.state.value}</h2>
      <button onClick={this.handleClick}>눌러욧!</button>
      </div>
    )
  }
};

// Contact 클래스
class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      contactData:[
        {name:'groy', phone:'000-0000-0000'},
        {name:'roze', phone:'000-0000-0001'},
        {name:'clow', phone:'000-0000-0002'},
        {name:'gent', phone:'000-0000-0003'},
        {name:'lyin', phone:'000-0000-0004'},
        {name:'laur', phone:'000-0000-0005'}

      ]
    };
  }

  render(){
    const mapToComponent = (data) => {
      return data.map((contact,i) => {
        return(<Contact contact={contact} key={i}/>);
      });
    };
    return(
      <div>
        { mapToComponent(this.state.contactData) }
      </div>

    );
  }

}

// export default hot(module)(App);
// export default hot(module)(Counter);
export default hot(module)(Contact);

