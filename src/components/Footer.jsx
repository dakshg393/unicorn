import React from "react";
import unicornLogo from "../assets/unicornLogo.svg";
import { FaLinkedin, FaRegArrowAltCircleUp } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import clutch from "../assets/images/Clutch.png";
import forbes from "../assets/images/Forbes.png";
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling for better UX
    });
  };

  return (
    <footer className="container mx-auto lg:px-10 px-4 py-4 bg-[#000D0E] text-white">
      {/* logo section */}
      <section className="flex justify-between items-center mb-12">
        <div>
          <img src={unicornLogo} alt="logo" />
        </div>

        <div>
          <button
            onClick={scrollToTop}
            className="text-[#368DE5] text-base border border-[#368DE5] rounded-lg bg-transparent sm:py-3 sm:px-4 px-2 py-1 flex items-center gap-2.5 cursor-pointer"
          >
            Get top of the page <FaRegArrowAltCircleUp />
          </button>
        </div>
      </section>

      <section className="flex md:justify-between md:flex-row flex-col gap-8">
        {/* left section */}
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-[70px]">
          <div>
            <h3 className="text-[#368DE5] text-[23px] font-bold mb-[19px]">Company</h3>
            <ul className="flex flex-col gap-[10px] font-light">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-[#368DE5] transition-all cursor-pointer w-fit duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={scrollToTop}
                  className="hover:text-[#368DE5] transition-all cursor-pointer w-fit duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={scrollToTop}
                  className="hover:text-[#368DE5] transition-all cursor-pointer w-fit duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className="hover:text-[#368DE5] transition-all cursor-pointer w-fit duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  onClick={scrollToTop}
                  className="hover:text-[#368DE5] transition-all cursor-pointer w-fit duration-300"
                >
                  Careers
                </Link>
              </li>
              
              <li className="hover:text-[#368DE5] transition-all cursor-pointer w-fit duration-300">
                <Link to={"/about#team"}>
                Team
                </Link>
              </li>
              <li className="hover:text-[#368DE5] transition-all cursor-pointer w-fit duration-300">
                <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#368DE5] text-[23px] font-bold mb-[19px]">Services</h3>
            <ul className="flex flex-col gap-[10px] font-light">
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                <Link to={"/services?tab=1#services"}>IT Management Services</Link>
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                 <Link to={"/services?tab=1#services"}>Data Tracking Security</Link>
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                 <Link to={"/services?tab=1#services"}>Website Development</Link>
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                 <Link to={"/services?tab=1#services"}>CRM Solutions And Design</Link>
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                 <Link to={"/services?tab=1#services"}>UI/UX Design Services</Link>
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                 <Link to={"/services?tab=1#services"}>Technology Solution</Link>
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                 <Link to={"/services?tab=1#services"}>Software Development</Link>
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                 <Link to={"/services?tab=1#services"}>Graphic Design</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#368DE5] text-[23px] font-bold mb-[19px]">Our Fields</h3>
            <ul className="flex flex-col gap-[10px] font-light">
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Healthcare
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Banks
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Logistics
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Supermarkets
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Industries
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Hostels
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Fintech
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                E-Commerce
              </li>
            </ul>
          </div>
        </div>

        {/* right section */}
        <div className="bg-[#001118] rounded-2xl p-8 h-fit">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">INDIA (HQ)</h2>
            <div className="flex items-center gap-3">
              <IoMdContacts className="text-xl " />
              <a href="mailto:Itsunicorntech@gmail.com"  className="hover:underline"> 
                <p>Itsunicorntech@gmail.com</p>
              </a>
            </div>
            <div className="flex items-center gap-3">
               
              <FaLocationDot className="text-xl" />
               <a  href="https://www.google.com/maps/place/Lig+Square,+Indore,+Madhya+Pradesh/"  target="_blank" rel="noopener noreferrer" className="hover:underline">
                <p>Lig square,Indore, [M.P.]India</p>
              </a>
            </div>
            <div className="flex gap-3 text-start">
              <IoIosCall className="text-xl mt-1" />
              <p>
                <a href="tel:+919589572990" className="block hover:underline">
                +91-958-957-2990 </a> 
                <a href="tel:+919630088808" className="block hover:underline">
                +91-963-008-8808
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-between sm:flex-row flex-col items-center mt-10 sm:gap-0 gap-5">
        {/* social media section */}
        <div className="sm:w-auto w-full">
          <h4 className="text-[18px] font-bold sm:text-start text-center">Social Media</h4>
          <div className="flex items-center sm:justify-normal justify-center sm:gap-4  gap-8 mt-3">

            <span className="p-1 bg-[#368DE5] rounded-full text-black text-xl">
              <FaFacebookF />
            </span>
            <span className="p-1 bg-[#368DE5] rounded-full text-black text-xl">
              <a href="https://twitter.com/its_unicorntech" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
            </span>
            <span className="p-1 bg-[#368DE5] rounded-full text-black text-xl">
              <FaLinkedinIn />
            </span>

            <span className="p-1 bg-[#368DE5] rounded-full text-black text-xl">
              <a href="https://wa.me/9589572990?text=Hello%20I%20am%20interested" target="_blank" rel="noopener noreferrer">

                <IoLogoWhatsapp />
              </a>
            </span>

            <span className="p-1 bg-[#368DE5] rounded-full text-black text-xl">
              <a href="https://www.instagram.com/its_unicorn_tech/" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </span>
            
          </div>
        </div>

        {/* firm awards */}
        <div className="flex gap-4 items-center justify-center sm:justify-normal sm:w-auto w-full">
          {/* <img src={clutch} alt="award 1" className="w-12 sm:w-auto" />
          <img src={forbes} alt="award 2" className="w-12 sm:w-auto" /> */}
        </div>
      </section>

      {/* bottom footer */}
      <section className="py-6 mt-10 border-t border-[#4B4C4D]">
        <div className="flex justify-between md:flex-row flex-col gap-4 md:items-center font-semibold items-start">
          <p>© UniTech Private Limited 2024. All rights reserved</p>
          {/* <p>Privacy Policy | Terms & Condition | Site Map</p> */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;