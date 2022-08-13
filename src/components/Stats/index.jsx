import React from "react";

const Stats = () => {
  return (
    <div className="w-[85%] mx-auto py-[4em] pb-[8em]">
      <p className="text-yellow text-subheading ">Statistics.</p>
      <p className="text-white text-heading w-[30%] font-secondary font-medium">
        My kitchening catalogue.
      </p>

      <div className="flex justify-around items-center text-center text-white mt-8">
        <div>
          <p className="text-subheading font-secondary">Projects Completed.</p>
          <p className="text-heading font-primary">36</p>
        </div>

        <div>
          <p className="text-subheading font-secondary">Happy Clients.</p>
          <p className="text-heading font-primary">11</p>
        </div>

        <div>
          <p className="text-subheading font-secondary">Open Source Contributions.</p>
          <p className="text-heading font-primary">2</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
