import React from 'react'
import { hot } from 'react-hot-loader'

const App2 = (props)=>{
    return(
      <div>
        <span>{props.propsName}</span>
        <button type="button" onClick={props.changeString}>누르면 변할까?</button>
      </div>
    )
}
//propsName 은 여기서 설정한 프롭스 이름이며 다른곳에서 받아 사용.

export default hot(module)(App2);
