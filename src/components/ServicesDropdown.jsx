import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import dropdownImg from "../assets/images/dropdownImg.png";
import blueCircle from "../assets/images/blueCircle.png";
import arrow from "../assets/arrow.svg";
const ServicesDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} // Start off-screen, faded out
      animate={{ opacity: 1, y: 0 }} // Fade in and slide down to position
      transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
      className="absolute top-20 px-5 flex xl:flex-row flex-col justify-between  w-4/5 -translate-x-1/2 left-1/2 gap-10 py-8 rounded-[20px] border border-[#368DE5] bg-[#368DE54D] backdrop-blur-3xl"
    >
      <div>
        <div className="flex justify-start xl:gap-[70px] gap-10 w-full grow">
          <div>
            <h2 className="text-2xl font-bold mb-2">Services</h2>
            <ul>
              <li>IT Management Services</li>
              <li>Data Tracking Security</li>
              <li>Website Development</li>
              <li>CRM Solutions And Design</li>
              <li>UI/UX Design Services</li>
              <li>Technology Solution</li>
              <li>Software Development</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Our Fields</h2>
            <ul>
              <li>Healthcare</li>
              <li>Banks</li>
              <li>Logistics</li>
              <li>Supermarkets</li>
              <li>Industries</li>
              <li>Hostels</li>
              <li>Fintech</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Mostly Used</h2>
            <ul>
              <li>React JS</li>
              <li>Node JS</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-[#3486DA] my-10"></div>
        <div className="flex md:flex-row flex-col gap-y-5 justify-between items-center 2xl:gap-[290px]">
          <div className="flex gap-4 items-center">
            follow Us:
            <div className="flex items-center gap-3 text-xl text-[#368DE5]">
              <FaFacebookF />
              <BiLogoInstagramAlt />
              <FaLinkedin />
              <FaXTwitter />
              <IoLogoWhatsapp />
            </div>
          </div>
          <div>
            Looking for new Career?{" "}
            <Link to={""} className="text-primary">
              {" "}
              We’re Hiring{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#368DE54D]  border border-[#368DE5] rounded-[20px] p-5 ">
        <p className="text-sm font-light">Compuetr Software</p>
        <h3 className="text-[26px] font-bold">Hosting Websites</h3>
        <div className="relative flex items-center justify-center">
          <img src={blueCircle} alt="blue circle" />
          <img
            src={dropdownImg}
            alt="drop down image"
            className="xl:left-5 xl:top-5 xl:w-[60%] absolute  "
          />
        </div>
        <div className="flex gap-2">
          <Link
            to={"/services"}
            className="border rounded-[6px] px-7 py-2 border-[#368DE5] bg-transparent hover:bg-[#368DE5] flex gap-2 items-center transition-all duration-300 ease-linear"
          >
            <button className="flex gap-2 items-center cursor-pointer">
              Services
              <MdArrowOutward className="text-xl" />
            </button>
          </Link>
          <img src={arrow} alt="" className="w-10" />
          <p className="text-xs">One More Time Click</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesDropdown;
