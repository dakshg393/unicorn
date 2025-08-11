import React from "react";
import wifi from "../assets/Wifi.svg";
import services from "../assets/services.svg";
import career from "../assets/career.svg";
import contact from "../assets/contact.svg";
import portfolio from "../assets/portfolio.svg";
import team from "../assets/team.svg";
import star from "../assets/star.svg";
import clutch from "../assets/images/Clutch_logo.png";
import gartner from "../assets/images/gartner_logo.png";
import userAvatar from "../assets/userAvatar.png";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion"; // Import for animation
import { Link } from "react-router-dom";
const CompanyDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} // Start off-screen, faded out
      animate={{ opacity: 1, y: 0 }} // Fade in and slide down to position
      transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
      className="absolute top-20 px-5 flex w-4/5 -translate-x-1/2 left-1/2  2xl:flex-row flex-col justify-between gap-10 py-8 rounded-[20px] border border-[#368DE5] bg-[#368DE54D] backdrop-blur-2xl"
    >
      <div className="">
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-5 lg:gap-y-12 gap-y-5">
          <div>
            <div className="flex items-center gap-2">
              <img src={wifi} alt="about us" />
             <Link to={'/about'}> <p className="text-lg font-semibold">About us</p></Link>
            </div>
            <p className="text-sm font-light">Learn more about Unitech</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <img src={services} alt="services" />
              <Link to={'/services'}><p className="text-lg font-semibold">Services</p></Link>
            </div>
            <p className="text-sm font-light">Happy to Help you!</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <img src={portfolio} alt="portfolio" />
             <Link to={'/portfolio'}>
             <p className="text-lg font-semibold">Portfolio</p>
             </Link>
            </div>
            <p className="text-sm font-light">Explore our all Overview</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <img src={career} alt="Career" />
              <Link to={'/career'}><p className="text-lg font-semibold">Career</p></Link>
            </div>
            <p className="text-sm font-light">We are hiring</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <img src={contact} alt="Contact us" />
             <Link to={'/contact'}> <p className="text-lg font-semibold">Contact us</p></Link>
            </div>
            <p className="text-sm font-light">Happy to Help you!</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <img src={team} alt="Team" />
              <Link to={'/about#team'}><p className="text-lg font-semibold">Team</p></Link>
            </div>
            <p className="text-sm font-light">We are Friendly Join our team</p>
          </div>
        </div>
        <div className="w-[95%] mx-auto h-[0.5px] bg-[#3486DA] my-10"></div>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to={"/contact"} className=" grow border rounded-[6px] px-7 py-2 border-[#368DE5] bg-transparent hover:bg-[#368DE5] flex gap-2 items-center transition-all duration-300 ease-linear">
          <button className="flex gap-2 items-center" >
            Free Consultation
            <MdArrowOutward className="text-xl" />
          </button>
          </Link>

          {/* <div className="grow bg-[#E3F0FF] text-black gap-2 rounded-[6px] px-3 py-2 flex items-center">
            <img src={clutch} alt="clutch" className="lg:w-auto w-10" />
            <div className="border-l-[0.5px] pl-3 border-gray-500">
              <img src={star} alt="star" />
              <p className="lg:text-base text-sm">
                From <span className="text-[#368DE5]">200+</span> Reviews
              </p>
            </div>
          </div>

          <div className="grow bg-[#E3F0FF] text-black gap-4 rounded-[6px] px-3 py-2 flex items-center">
            <img src={gartner} alt="gartner" className="lg:w-auto w-10" />
            <div className="border-l-[0.5px] pl-3 border-gray-500">
              <img src={star} alt="star" />
              <p className="lg:text-base text-sm">
                From <span className="text-[#368DE5]">200+</span> Reviews
              </p>
            </div>
          </div> */}


        </div>
      </div>
      <div className="bg-[#368DE54D] lg:block hidden 2xl:w-[30%] w-auto border border-[#368DE5] rounded-[20px] p-5 space-y-5">
        <div className="flex items-center gap-2">
          <img src={userAvatar} alt="ceo"  className="w-20 h-20 "/>
          <div>
            <h3 className="text-[22px] font-medium">Narendra Patidar</h3>
            <p className="text-sm font-normal text-[#969696]">CEO at Unicorn Tech</p>
          </div>
        </div>
        <p>
          As a CEO at Unicorn Tech I have been voice crying in the wilderness,
          trying to make requirements clear, use every minute to deliver the
          result, and not reinvent the wheel. Here at Unicorn Tech, I made that
          possible for the clients.
        </p>
      </div>
    </motion.div>
  );
};

export default CompanyDropdown;