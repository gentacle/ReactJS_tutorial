import React from "react";
import { hot } from 'react-hot-loader';

const AppTest = (props)=>{
    return(
        <div>
          <h2>{props.name}</h2>
          <div>{props.children}</div>
        </div>
    )
}
//테스트앱 메소드를 호출함.


export default hot(module)(AppTest);
