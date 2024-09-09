import React from 'react'
import { useContext } from 'react'
import { CalculatorContext } from '../contexts/calculatorContext'

const Display = () => {

    // Destructure the state variables from the context
    const { prevOpValue, opValue, currentOpValue } = useContext(CalculatorContext)
    const previousOperation = prevOpValue[0]
    const operation = opValue[0]
    const currentOperation = currentOpValue[0]

  return (
    <div className='bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4'>
        {/* Calculator output */}
        <div className='flex flex-col items-end space-y-2'>

            {/* Calculator output previous operation */}
            <div className='text-xl md:text-2xl min-h-[3rem] text-white text-opacity-70'>
                {previousOperation} {operation}
            </div>

            {/* Calculator output current operation */}
            <div className='text-3xl md:text-4xl text-white min-h-[4rem] break-all break-words'>
                {currentOperation}
            </div>
        </div>
    </div>
  )
}

export default Display