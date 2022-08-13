import React from "react";
import memoji from "../../assets/memoji.svg";
import Button from "../button";
import IconContainer from "../IconContainer";

const Hero = () => {
  return (
    <div className="w-[85%] mx-auto grid md:grid-cols-2 grid-cols-1 mt-[2em] justify-items-center font-primary ">
      <div className="md:text-left text-center">
        <h1 className="lg:text-hero sm:text-[36px] text-[32px] ">
          <span className="text-white">Hello!, </span>
          <span className="text-white">I ‘m a </span>
          <br />
          <span className="text-yellow">UX Engineer </span>
          <span className="text-white">
            and <br /> Frontend Engineer!.
          </span>
        </h1>
        <p className="text-white w-[85%] md:mx-0 mx-auto my-[3em] sm:text-[16px] text-[14px]">
          Cooking state-of-the-art, easy-to-use, user-friendly websites and
          applications.
        </p>
        <div className="flex sm:flex-row flex-col justify-between lg:w-[70%] md:mx-0 sm:items-start items-center mx-auto sm:w-[80%] w-[100%]">
          <Button text="Let's Talk" style="text-white" />
          <Button text="My Resumé" style="bg-yellow text-white sm:mt-0 mt-[1em]" />
        </div>

        <div className="sm:w-[50%] w-[100%] md:mb-0 md:mx-0 mx-auto mt-[3em] sm:pb-[3em] pb-0">
          <IconContainer />
        </div>
      </div>
      <div className="w-[100%] bg-Hero bg-contain bg-center sm:h-[100%] h-[65vh] bg-no-repeat">
        <img src={memoji} alt="Hero" className="w-[56%] ml-[17%] h-[100%] " />
      </div>
    </div>
  );
};

export default Hero;
