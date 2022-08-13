import React from "react";
import logo from "../../assets/Logo.png";
import logoBlack from "../../assets/Logo-black.png";

import { FaMoon, FaLightbulb } from "react-icons/fa";

const Header = ({ setTheme, colorTheme }) => {
  return (
    <div className="w-[85%] mx-auto h-[100px] flex justify-between items-center font-primary">
      {colorTheme === "dark" ? (
        <img src={logo} alt="logo" className="w-[170px]" />
      ) : (
        <img src={logoBlack} alt="logo" className="w-[170px]" />
      )}

      <div
        onClick={() => setTheme(colorTheme)}
        className="dark:text-black text-white text-[1.5em]"
      >
        {colorTheme === "dark" ? <FaLightbulb /> : <FaMoon />}
      </div>
    </div>
  );
};

export default Header;
