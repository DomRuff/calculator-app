import React from 'react'
import { useState, createContext } from 'react'

const CalculatorContext = createContext();

const CalculatorContextProvider = ( {children} ) => {

    {/* Define state variables for calculator */}
    const [previousOperation, setPreviousOperation] = useState('')
    const [operation, setOperation] = useState('')
    const [currentOperation, setCurrentOperation] = useState('')
    
  return (
    <>
      {/* Provide the state variables to the children components */}
      <CalculatorContext.Provider 
          value={{ 
              prevOpValue : [previousOperation, setPreviousOperation],
              opValue: [operation, setOperation],
              currentOpValue: [currentOperation, setCurrentOperation]
              }}>
          {children}
      </CalculatorContext.Provider>
    </>
    
  )
}

export { CalculatorContext, CalculatorContextProvider};