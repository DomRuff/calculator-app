import React from 'react'
import Display from './Display'
import Buttons from './Buttons'

const Calculator = () => {
  return ( 
    <div className='flex items-center justify-center  bg-gray-900 p-4'>
      {/* Calculator Components*/}
      <div className='bg-gray-800 w-full max-w-md rounded-lg shadow-lg p-6'>

          {/* Display Component*/}
          <Display />

          {/* Buttons Component*/}
          <Buttons />
      </div>
    </div>
  

  )
}

export default Calculator