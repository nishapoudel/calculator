import { useState } from "react"
import Button from '../Button/Button'
import Header from '../Header/Header'
import "./Keypad.css"

function Keypad(props) {
  const[value, setValue] = useState(0);
  const[memory, setMemory] = useState(null);         //to store previous value
  const[operator, setOperator] = useState(null);
 
  const num = parseFloat(value);
  //  console.log('value is ' ,typeof(num))
  
  // const handlebutton = content => () => {
  //   setValue( (parseFloat(value) + content) .tostring());

  // };

   const handleKeyPress = (content) =>   
   {
     const num = parseFloat(value);
     console.log('num is ' , num, typeof(num))



     
     if(content === "AC")
     {
       setValue("0")
       console.log("ac")
       return;
      
     }

     if(content ==="%")
     {   //  setValue(( num /100).toString());
      setValue( num /100);
      console.log("%");
       return;
     }
    
     if(content === "⁺∕₋")
     {   
      setValue( num * - 1);
      console.log("plus minus")
     
       return;
     }

     if(content === "+")
     {
      console.log(" first add button click")
        if(operator !== null)

        {
          console.log("more op is pressed, for more than 2 digit")
              if(operator === "+")
              {
                setMemory((memory) + parseFloat( value));  
                console.log(" 2nd added val and memory val", value, memory);
                console.log(" 1st input value is memory val", memory);

              }
              else if(operator === "-"){
                setMemory(parseFloat(memory) - parseFloat( value))
        
              }
              else if(operator === "×"){
                setMemory(parseFloat(memory) * parseFloat( value))
        
              }
              else if(operator === "÷"){
                setMemory(parseFloat(memory) / parseFloat( value)) 
              }
          }else{
        setMemory(parseFloat(value));
        console.log("memory for  2nd num for add", parseFloat(memory))
       }
       
       
       setValue("0");
       setOperator("+");
    
       return;
      
     }

     if(content === "-")
     {
      if(operator !== null)

      {
        console.log("if more op is pressed")
            if(operator === "+")
            {
              setMemory((memory) + parseFloat( value));  
              console.log(" 2nd added val", value);
              console.log(" memory val", memory);

            }
            else if(operator === "-"){
              setMemory(parseFloat(memory) - parseFloat( value))
      
            }
            else if(operator === "×"){
              setMemory(parseFloat(memory) * parseFloat( value))
      
            }
            else if(operator === "÷"){
              setMemory(parseFloat(memory) / parseFloat( value)) 
            }
             }else{
                  setMemory(parseFloat(value));
             }
      //  setMemory(parseFloat(value));
          setValue("0")
          setOperator("-")
          console.log(" pre minus", value)
          return;
      
     }
     if(content === "×")
     {
      if(operator !== null)

      {
        console.log("if more op is pressed")
            if(operator === "+")
            {
              setMemory((memory) + parseFloat( value));  
              console.log(" pre added val", value);
              console.log(" memory val", memory);

            }
            else if(operator === "-"){
              setMemory(parseFloat(memory) - parseFloat( value))
      
            }
            else if(operator === "×"){
              setMemory(parseFloat(memory) * parseFloat( value))
      
            }
            else if(operator === "÷"){
              setMemory(parseFloat(memory) / parseFloat( value)) 
            }
             }else{
                  setMemory(parseFloat(value));
             }
      //  setMemory(parseFloat(value));
       setValue("0")
       setOperator("×")
       console.log(" pre mul", value)
       return;
      
     }

     if(content === "÷")
     {
      if(operator !== null)

      {
        console.log("if more op is pressed")
            if(operator === "+")
            {
              setMemory((memory) + parseFloat( value));  
              console.log(" pre added val", value);
              console.log(" memory val", memory);

            }
            else if(operator === "-"){
              setMemory(parseFloat(memory) - parseFloat( value))
      
            }
            else if(operator === "×"){
              setMemory(parseFloat(memory) * parseFloat( value))
      
            }
            else if(operator === "÷"){
              setMemory(parseFloat(memory) / parseFloat( value)) 
            }
             }else{
                  setMemory(parseFloat(value));
             }
      // 
      
       setValue("0")
       setOperator("÷")
       console.log(" pre div", value)
       return;
      
     }

     
     if(content === "=")
     {
       if(!operator) return;

      if(operator === "+")
      {
        setValue(memory + parseFloat( value))
       
      }
      else if(operator === "-"){
        setValue(memory - parseFloat( value))

      }
      else if(operator === "×"){
        setValue(memory * parseFloat( value))

      }
      else if(operator === "÷"){
        setValue(memory / parseFloat( value))

      }

      console.log("numeric value", typeof(memory), typeof(value))
      setMemory(null);
      setOperator(null);
      return;
      
     }
     
     
     if(value[value.length-1] === "."){   //for decimal
       setValue(value + content);
     }
     else{
      setValue( (parseFloat(num + content)));  
     }



     
  //  setValue( (parseFloat(value) + content));        //display clcik value 
      //  setValue( (parseFloat(value) + content).toString());

   };



  return (
    <div>
        <div className='header'>
            {value}
         </div>
    <div className='keypad' >
        <Button handleKeyPress ={handleKeyPress} type="operator" content="AC"></Button>
        <Button handleKeyPress ={handleKeyPress}  type="operator" content="⁺∕₋"></Button>
        <Button  handleKeyPress ={handleKeyPress} type="operator" content="%"></Button>
        <Button  handleKeyPress ={handleKeyPress}type="right" content="÷"></Button>
        <Button  handleKeyPress ={handleKeyPress}type=" seven"  content="7"></Button>
        <Button  handleKeyPress ={handleKeyPress} type="btn"  content="8"></Button>
        <Button   handleKeyPress ={handleKeyPress}type="btn" content="9"></Button>
        <Button   handleKeyPress ={handleKeyPress} type="right" content="×"></Button>
        <Button   handleKeyPress ={handleKeyPress} type="btn"  content="4"></Button>
        <Button   handleKeyPress ={handleKeyPress}type="btn" content="5"></Button>
        <Button   handleKeyPress ={handleKeyPress}type="btn" content="6"></Button>
        <Button   handleKeyPress ={handleKeyPress}type="right" content="-"></Button>
        <Button   handleKeyPress ={handleKeyPress}type="btn" content="1"></Button>
        <Button   handleKeyPress ={handleKeyPress}type="btn" content="2"></Button>
        <Button   handleKeyPress ={handleKeyPress}type="btn" content="3"></Button>
        <Button   handleKeyPress ={handleKeyPress}type="right" content="+"></Button>
        <Button   handleKeyPress ={handleKeyPress}type="zero" content="0"></Button>
        <Button handleKeyPress ={handleKeyPress}  type="btn" content="."></Button >
        <Button handleKeyPress ={handleKeyPress}  type="right" content="="></Button>
    
       
    </div>
    </div>
    
  )
}

export default Keypad