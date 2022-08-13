import React from "react";
import ClientCard from "./ClientCard";
import Sanity from "/src/assets/clients/sanity.svg";
import Fp from "/src/assets/clients/fp.svg";
import Dym from "/src/assets/clients/dym.svg";
import Lahhf from "/src/assets/clients/lahhf.svg";
import Evea from "/src/assets/clients/evea.svg";
import Iexchange from "/src/assets/clients/iexchange.svg";

const data = [
  {
    color: "bg-[#FBE6E7]",
    text: "Sanity io",
    role: "Community  Ambassador.",
    img: Sanity,
  },
  {
    color: "bg-[#F3D7D7]",
    text: "Fountain Pay",
    role: "Frontend Engineer.",
    img: Fp,
  },
  {
    color: "bg-[#DFCFF3]",
    text: "Dynamixity",
    role: "Engineering Lead.",
    img: Dym,
  },
  {
    color: "bg-[#FFFFFF]",
    text: "Lahhf",
    role: "UX Engineer.",
    img: Lahhf,
  },
  {
    color: "bg-[#D9D9F8]",
    text: "Evea",
    role: "Frontend Engineer.",
    img: Evea,
  },
  {
    color: "bg-[#A4A4E4]",
    text: "Iexchange",
    role: "Frontend Engineer.",
    img: Iexchange,
  },
];

const CardContainer = () => {
  return (
    <div className="pb-[3em]">
      <div className="gap-[3em] w-[92.5%] ml-auto  flex overflow-x-scroll py-4 pr-4 overscroll-none no-scrollbar">
        {data.map((item, i) => (
          <ClientCard
            imgUrl={item.img}
            key={item.color}
            style={item.color}
            text={item.text}
            role={item.role}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
