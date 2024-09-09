import React from 'react'
import Calculator from './Calculator'

const HomePage = () => {
  return (
    <div className='bg-gray-900 min-h-screen flex flex-col items-center justify-center'>
        
        {/* Calculator Header*/}
        <div>
            <header className='text-center text-white p-2'>
                {/* Calculator Title*/}
                <h1 className='text-4xl md:text-5xl font-bold'>Calculator App</h1>

                {/* Horizontal line for styling*/}
                <hr className='bg-white h-1 w-1/2 mx-auto mt-2' />
            </header>
        </div>

        {/* Calculator Functionality*/}
        <div className='w-full max-w-md p-4'>
            <Calculator />
        </div>
    </div>
    
    
  
  )
}

export default HomePage