import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Keypad from './Components/Keypad/Keypad'


function Home() {
  


const handleKeyPress = (content) =>   
{  
    console.log( 'after',content)
}
  return (
    <div>
        <div className='app_calculator'  onKeyDown={(event)=>handleKeyPress(event.content)}>
            <div className='calculator'>
              <div className='top'></div>
            
              
                <Keypad ></Keypad>

                <div className='bottom'></div>

            </div>

        </div>

    </div>
  )
}


export default Home