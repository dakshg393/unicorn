import React from "react";

const Card = ({ data }) => {
  return (
    <div className="bg-gradient-to-tl from-[#001118]/40 to-[#368DE5]/40 p-px rounded-[20px]">
      <div className="bg-[#001118] rounded-[20px] p-4 h-full w-full ">
        <div>
          <img src={data.icon} alt={data.text} />
        </div>

        <div className="mt-4">
          <span className="text-3xl font-bold">{data.num}</span>
          <p className="text-base font-normal">{data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
