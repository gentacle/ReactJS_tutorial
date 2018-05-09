import React from 'react'

const Asdf = (props)=>{
    return(
      <div>
        <span>{props.qwer}</span>
        <button type="button" onClick={props.changeString}>click Me!</button>
      </div>
    )
}

export default Asdf;