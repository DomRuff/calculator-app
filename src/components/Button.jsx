import React from 'react'

const Button = ({ text, func, num=false }) => {

  return (

    <>
      <button 
        onClick={() => func(text)} 
        className={`${num ? 'bg-indigo-300' : 'bg-indigo-400'} text-white text-2xl px-6 py-4 border border-white hover:bg-indigo-500`}>
        {text}
    </button>
    </>
    
  )
}

export default Button