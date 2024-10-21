import React from "react";

const Footer = () => {
  return (
    <div className="bg-yellow py-[4em]">
      <div className="w-[85%] mx-auto text-white">
        <p className="text-[64px] font-medium">send a <br /> message!</p>
        <p className="text-[14px] font-extralight sm:w-[30%] w-[100%] my-[2em]">Got a question or proposal, or just want to say hello? Go ahead.</p>
        <p className="text-[16px] mb-[1em]">Shoot a mail</p>
        <a href="mailto:izzyfresher@gmail.com" className="underline">ayooluwaisrael.ai@gmail.com</a>
      </div>
    </div>
  );
};

export default Footer;
