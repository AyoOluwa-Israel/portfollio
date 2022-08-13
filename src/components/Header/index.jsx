import React from 'react'
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <div className="w-[85%] mx-auto h-[100px] flex justify-between items-center font-primary">
      <img src={logo} alt="logo" className="w-[170px]"/>
      <div></div>
    </div>
  )
}

export default Header