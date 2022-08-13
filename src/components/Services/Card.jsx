import React from 'react'

const Card = ({children, bg}) => {
  return (
    <div className={`rounded-[10px] h-[300px] min-w-[300px] ${bg}`}>
      {children}
    </div>
  )
}

export default Card