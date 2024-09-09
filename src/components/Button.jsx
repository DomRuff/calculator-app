import React from 'react'

const Button = ({ text, func, num=false }) => {

  return (

    <>
      <button 
        onClick={() => func(text)} 
        className={`${num ? 'bg-indigo-300' : 'bg-indigo-400'}
                  text-white text-xl md:text-2xl 
                  px-4 py-2 md:px-6 md:py-4 
                  border border-transparent
                  rounded-lg shadow-md
                  hover:bg-indigo-500
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 
                  transition duration-100 ease-in-out
                   `}>
        {text}
    </button>
    </>
    
  )
}

export default Button