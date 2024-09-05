import React from 'react'
import Calculator from './Calculator'

const HomePage = () => {
  return (
    <div className='bg-gray-800 min-h-screen'>
        
        {/* Calculator Header*/}
        <div>
            <header className='text-center text-4xl text-white p-5'>
                {/* Calculator Title*/}
                <h1>Calculator App</h1>

                {/* Horizontal line for styling*/}
                <hr className='bg-white h-1 w-1/2 mx-auto mt-3' />
            </header>
        </div>

        {/* Calculator Functionality*/}
        <div className='flex flex-col items-center'>
            <Calculator />
        </div>
    </div>
    
    
  
  )
}

export default HomePage