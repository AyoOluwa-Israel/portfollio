import React from "react";
import Github from "../../assets/icons/yellow-git.svg";
import LinkedIn from "../../assets/icons/yellow-linkedin.svg";
import Telegram from "../../assets/icons/yellow-git.svg";
import Twitter from "../../assets/icons/yellow-twitter.svg";

const IconContainer = () => {
  return (
    <div className="flex justify-between items-center">
      <a href="https://github.com/AyoOluwa-Israel" target="_blank" >
        <img src={Github} alt="Github" className="w-[30px]"/>
      </a>

      <a href="https://www.linkedin.com/in/adeleke-israel-ayooluwa-179480149/" target="_blank">
        <img src={LinkedIn} alt="LinkedIn" className="w-[30px]"/>
      </a>

      <a href="https://t.me/AyoOluwa_Israel" target="_blank">
        <img src={Telegram} alt="Github" className="w-[30px]"/>
      </a>

      <a href="https://twitter.com/Israel_AyoOluwa" target="_blank">
        <img src={Twitter} alt="Github" className="w-[30px]"/>
      </a>
    </div>
  );
};

export default IconContainer;
