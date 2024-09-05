import React from 'react'
import Display from './Display'
import Buttons from './Buttons'

const Calculator = () => {
  return ( 
    <div className='flex items-center justify-center mt-24'>
      {/* Calculator Components*/}
      <div className='bg-gray-600 w-full max-w-[25rem] shadow-lg p-3'>

          {/* Display Component*/}
          <Display />

          {/* Buttons Component*/}
          <Buttons />
      </div>
    </div>
  

  )
}

export default Calculator