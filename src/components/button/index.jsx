import React from 'react'

const Button = ({text, style}) => {
  return (
    <button className={`rounded-[10px] border-[1px] border-yellow ${style} py-4 w-[150px]`}>
      {text}
    </button>
  )
}

export default Button