import React from 'react'

const Button = ({text, style}) => {
  return (
    <button className={`rounded-[10px] border-[1px] border-yellow ${style} sm:py-4 py-3 w-[150px] sm:text-[16px] text-[12px]`}>
      {text}
    </button>
  )
}

export default Button