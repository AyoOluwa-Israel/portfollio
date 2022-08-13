import React from "react";

const Stats = () => {
  return (
    <div className="w-[85%] mx-auto py-[4em] sm:pb-[8em] pb-[4em]">
      <p className="text-yellow text-subheading ">Statistics.</p>
      <p className="dark:text-black text-white sm:text-heading text-[24px] sm:w-[30%] w-[100%] font-secondary font-medium">
        My kitchening catalogue.
      </p>

      <div className="flex sm:flex-row flex-col justify-around items-center text-center dark:text-black text-white mt-8">
        <div className="sm:my-0 my-[2em]">
          <p className="text-subheading font-secondary">Projects Completed.</p>
          <p className="text-heading font-primary">36</p>
        </div>

        <div className="sm:my-0 my-[2em]">
          <p className="text-subheading font-secondary">Happy Clients.</p>
          <p className="text-heading font-primary">11</p>
        </div>

        <div className="sm:my-0 my-[2em]">
          <p className="text-subheading font-secondary">Open Source Contributions.</p>
          <p className="text-heading font-primary">2</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
