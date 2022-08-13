import React from "react";
import ClientCard from "./ClientCard";

const data = [
  {
    color: "bg-[#FBE6E7]",
    text: "Sanity io ",
    role: "Community  Ambassador.",
    img: "",
  },
  {
    color: "bg-[#F3D7D7]",
    text: "Fountain Pay",
    role: "Frontend Engineer.",
    img: "",
  },
  {
    color: "bg-[#DFCFF3]",
    text: "Dynamixity",
    role: "Engineering Lead.",
    img: "",
  },
  {
    color: "bg-[#FFFFFF]",
    text: "Lahhf",
    role: "UX Engineer.",
    img: "",
  },
  {
    color: "bg-[#D9D9F8]",
    text: "Evea",
    role: "Frontend Engineer.",
    img: "",
  },
  {
    color: "bg-[#D9D9F8]",
    text: "Iexchange",
    role: "Frontend Engineer.",
    img: "",
  },
];

const Client = () => {
  return (
    <div className="w-[85%] mx-auto ">
      <p className="text-yellow text-subheading ">Clients.</p>
      <p className="text-white text-heading w-[45%] font-secondary font-medium">
        Working with various brands provides me with invaluable experiences.
      </p>
    </div>
  );
};

export default Client;
