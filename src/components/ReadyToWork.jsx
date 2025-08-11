import React from "react";
import { Link } from "react-router-dom";

const ReadyToWork = () => {
  return (
    <div className=" relative w-full mt-32  bg-[url(./assets/images/readyToWorkImg.png)]  py-36 md:h-[400px] border border-[#1B006B] bg-cover bg-center mb-20 ">
      {/* Blur overlay */}
      <div className="absolute xl:my-10 xl:mx-20 lg:my-7 lg:mx-14  md:mx-8 md:my-4  m-4 inset-0 text-white bg-[#0B0A72]/50 backdrop-blur-lg rounded-[20px] flex flex-col justify-center items-center md:space-y-10 space-y-3 md:px-[0%]">
        <h1 className="md:text-3xl text-lg font-bold   ">
          Ready to Work, Let's Chat
        </h1>
        <p className="md:text-base text-sm md:px-0 px-3 font-medium text-center">
          Our team of experts is ready to collaborate with you every step of the
          way, from initial consultation to implementation.
        </p>
        <Link to={'/contact'}>
          <button className="border rounded-lg font-bold md:px-6 px-3 md:text-base text-sm py-1 cursor-pointer ">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReadyToWork;
