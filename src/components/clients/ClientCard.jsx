import React from "react";

const ClientCard = ({ style, text, role, imgUrl }) => {
  return (
    <div
      className={`rounded-[10px] min-w-[200px] h-[200px] ${style} text-black p-4 text-center flex flex-col items-center justify-center shadow-md`}
    >
      <div className="h-[30%] mx-auto">
        <img
          src={imgUrl}
          alt={text}
          className="w-[80%] mx-auto font-secondary"
        />
      </div>

      <p className="text-[20px] font-medium my-[5px] font-secondary">{text}</p>
      <p className="text-[14px]">{role}</p>
    </div>
  );
};

export default ClientCard;
