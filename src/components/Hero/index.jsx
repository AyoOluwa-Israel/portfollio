import React from "react";
import memoji from "../../assets/memoji.svg";
import Button from "../button";
import IconContainer from "../IconContainer";

const Hero = () => {
  return (
    <div className="w-[85%] mx-auto flex items-center h-[calc(100vh-100px)] font-primary">
      <div className="w-[45%]">
        <h1 className="text-hero">
          <span className="text-white">Hello!, </span>
          <span className="text-white">I ‘m a </span>
          <br />
          <span className="text-yellow">UX Engineer </span>
          <span className="text-white">
            and <br /> Frontend Engineer!.
          </span>
        </h1>
        <p className="text-white w-[85%] my-[3em]">
          Cooking state-of-the-art, easy-to-use, user-friendly websites and
          applications.
        </p>
        <div className="flex justify-between w-[70%]">
          <Button text="Let's Talk" style="text-white" />
          <Button text="My Resumé" style="bg-yellow text-white" />
        </div>

        <div className="w-[50%] my-[3em]">
          <IconContainer />
        </div>
      </div>
      <div className="w-[55%] bg-Hero bg-cover bg-center h-[100%] flex ">
        <img src={memoji} alt="Hero" className="w-[56%] ml-[17%]" />
      </div>
    </div>
  );
};

export default Hero;
