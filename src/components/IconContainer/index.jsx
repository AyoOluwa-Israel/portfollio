import React from "react";
import Github from "../../assets/icons/yellow-git.svg";
import LinkedIn from "../../assets/icons/yellow-linkedin.svg";
import Telegram from "../../assets/icons/yellow-git.svg";
import Twitter from "../../assets/icons/yellow-twitter.svg";

const IconContainer = () => {
  return (
    <div className="flex justify-between items-center">
      <a href="">
        <img src={Github} alt="Github" className="w-[30px]"/>
      </a>

      <a href="">
        <img src={LinkedIn} alt="Github" className="w-[30px]"/>
      </a>

      <a href="">
        <img src={Telegram} alt="Github" className="w-[30px]"/>
      </a>

      <a href="">
        <img src={Twitter} alt="Github" className="w-[30px]"/>
      </a>
    </div>
  );
};

export default IconContainer;
