import React from 'react'
import Button from './Button'
import { useContext } from 'react'
import { CalculatorContext } from '../contexts/calculatorContext'
const Buttons = () => {

    // Destructure context values
    const { prevOpValue, opValue, currentOpValue } = useContext(CalculatorContext)
    const [previousOperation, setPreviousOperation] = prevOpValue
    const [operation, setOperation] = opValue
    const [currentOperation, setCurrentOperation] = currentOpValue


    // Calculate percentage of current operation
    const percent = () => {
        if (currentOperation === "") return
        setCurrentOperation(previousOperation / currentOperation)
    }
    

    // Clear current operation (CE)
    const clearCurrent = () => {
        setCurrentOperation("")
    }


    // Clear current operation and previous operation (C)
    const clearAll = () => {
        setPreviousOperation("")
        setOperation("")
        setCurrentOperation("")
    }


    // Delete last digit from current operation
    const deleteDigit = () => {
        if(currentOperation === "") return
        setCurrentOperation(currentOperation.slice(0, -1))
    }


    // Get 1 / x of current operation
    const reciprocal = () => {
        if (currentOperation === "") return
        if (currentOperation === "0"){
            setPreviousOperation("1/0")
            setCurrentOperation("Cannot divide by zero")
        }
        else{
            setPreviousOperation(`1/${currentOperation}`)
            setCurrentOperation(1 / currentOperation)
        }
    }


    // Square current operation
    const square = () => {
        if (currentOperation === "") return
        setPreviousOperation(`sqr(${currentOperation})`)
        setCurrentOperation(currentOperation ** 2)
    }


    // Square root current operation
    const squareRoot = () => {
        if (currentOperation === "") return
        if (currentOperation < 0){
            setPreviousOperation(`sqrt(${currentOperation})`)
            setCurrentOperation("Invalid Input")
        }
        else{
            setPreviousOperation(`sqrt(${currentOperation})`)
            setCurrentOperation(Math.sqrt(currentOperation))
        }
    }


    // Perform Division
    const divide = () => {
        if (currentOperation === ""){
            setPreviousOperation("0")
            setOperation("/")
        }
        else{
            setPreviousOperation(`${currentOperation}`)
            setOperation("/")
            setCurrentOperation("0")
            
        }
    }


    // Perform Multiplication
    const multiply = () => {
        if (currentOperation === ""){
            setPreviousOperation("0")
            setOperation("*")
        }
        else{
            setPreviousOperation(`${currentOperation}`)
            setOperation("*")
            setCurrentOperation("0")
            
        }
    }


    // Peform Subtraction
    const subtract = () => {
        if (currentOperation === ""){
            setPreviousOperation("0")
            setOperation("-")
        }
        else{
            setPreviousOperation(`${currentOperation}`)
            setOperation("-")
            setCurrentOperation("0")
            
        }
    }


    // Perform Addition
    const add = () => {
        if (currentOperation === ""){
            setPreviousOperation("0")
            setOperation("+")
        }
        else{
            setPreviousOperation(`${currentOperation}`)
            setOperation("+")
            setCurrentOperation("0")
            
        }
    }


    // Add digit to current operation
    const addDigit = (digit) => {

        //Limit number of digits to 15
        if(currentOperation.length >= 15) return

        // Guard for multiple decimal points
        if(digit === "." && currentOperation.includes(".")) return

        if(currentOperation === "0" && digit !== "."){
        
            setCurrentOperation(digit)
            return
        }

        // Append digit to current operation
        setCurrentOperation(currentOperation + digit)
    }


    // perform operation
    const performOperation = () => {
        if (previousOperation === "" || operation === "" || currentOperation === "") return
        let result = 0
        switch (operation) {
            case "+":
                result = parseFloat(previousOperation) + parseFloat(currentOperation)
                break
            case "-":
                result = parseFloat(previousOperation) - parseFloat(currentOperation)
                break
            case "*":
                result = parseFloat(previousOperation) * parseFloat(currentOperation)
                break
            case "/":
                if (currentOperation === "0"){
                    setCurrentOperation("Cannot divide by zero")
                    return
                }
                result = parseFloat(previousOperation) / parseFloat(currentOperation)
                break
            default:
                break
        }
        setPreviousOperation("")
        setOperation("")
        setCurrentOperation(result)
    }


    // Toggle sign of current operation
    const toggleSign = () => {
    
        if (currentOperation.startsWith('-')) {
            setCurrentOperation(currentOperation.slice(1));
        } 
        else {
            setCurrentOperation('-' + currentOperation);
        }
    }


  return (
    <div className='bg-indigo-300 rounded-md'>
        {/* Calculator buttons */}
        <div className='grid grid-cols-4'>

            {/* Calculator button row 1 */}
            <Button text={"%"} func={percent}/>
            <Button text={"CE"} func={clearCurrent}/>
            <Button text={"C"} func={clearAll}/>
            <Button text={"DEL"} func={deleteDigit}/>

            {/* Calculator button row 2 */}
            <Button text={"1/x"} func={reciprocal}/>
            <Button text={"x^2"} func={square}/>
            <Button text={"√x"} func={squareRoot}/>
            <Button text={"÷"} func={divide}/>

            {/* Calculator button row 3 */}
            <Button text={"7"} func={addDigit} num={true}/>
            <Button text={"8"} func={addDigit} num={true}/>
            <Button text={"9"} func={addDigit} num={true}/>
            <Button text={"x"} func={multiply}/>

            {/* Calculator button row 4 */}
            <Button text={"4"} func={addDigit} num={true}/>
            <Button text={"5"} func={addDigit} num={true}/>
            <Button text={"6"} func={addDigit} num={true}/>
            <Button text={"-"} func={subtract}/>

            {/* Calculator button row 5 */}
            <Button text={"1"} func={addDigit} num={true}/>
            <Button text={"2"} func={addDigit} num={true}/>
            <Button text={"3"} func={addDigit} num={true}/>
            <Button text={"+"} func={add}/>

            {/* Calculator button row 6 */}
            <Button text={"+/-"} func={toggleSign} num={true}/>
            <Button text={"0"} func={addDigit} num={true}/>
            <Button text={"."} func={addDigit} num={true}/>
            <Button text={"="} func={performOperation}/>
        </div>
    </div>
  )
}

export default Buttons