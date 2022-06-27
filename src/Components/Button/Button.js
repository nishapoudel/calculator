import React from 'react'
import "./Button.css"

function Button(props) {
    // const myClass = `button ${props.type}` 
    // const myClass = 'button ${children === "0" ? "Zero" :""}'


    // const handleClick = content => () =>
    // {console.log(content)
    //   setValue( (parseFloat(value) ));
    // }
    // const handleKeyPress = (content) =>   
    // {
     
   
    // console.log( 'after handle',content)
    // }
      //  setValue( (parseFloat(value) + content).toString());
    //onClick={()=>handleKeyPress(props.content)}
  return (
  
    
    
    <button className={props.type} onClick={()=>props.handleKeyPress(props.content)}> {props.content} </button>
    
    
  )
}

export default Button