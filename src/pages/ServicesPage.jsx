import React, { useState } from "react";
import searchImg from "../assets/images/servicesImages/searchImg.png";
import { GoArrowUpRight } from "react-icons/go";
import ItExpertise from "../assets/images/icons/ItExpertise.png";
import support from "../assets/images/icons/support24-7.png";
import customSolution from "../assets/images/servicesImages/customSolution.png";

import digitalImg from "../assets/images/servicesImages/digitalImg.png";
import arrow from "../assets/images/icons/arrow.png";
import arrowStraight from "../assets/images/icons/arrowStraight.png";

import crmDesktop from "../assets/images/icons/crmDesktop.png";
import codeDesktop from "../assets/images/icons/codeDesktop.png";
import analytics from "../assets/images/icons/analytics.png";
import settings from "../assets/images/icons/settings.png";
import uiux from "../assets/images/icons/uiux.png";
import bulb from "../assets/images/icons/bulb.png";
import { div } from "framer-motion/client";
import { BiPlay } from "react-icons/bi";
import { BsAndroid, BsAndroid2 } from "react-icons/bs";
import { PiAndroidLogo } from "react-icons/pi";
import {
  FaApple,
  FaJava,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaSwift,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiKotlin, SiNestjs } from "react-icons/si";
import longArrow from "../assets/images/icons/longArrow.png";
import FeaturesSection from "../components/FeaturesSection";

import whyUsSecImg from "../assets/images/servicesImages/whyUsSecImg.png";

const ServicesPage = () => {
  const services = [
    "Mobile App Development",
    "Web & CMS Development",
    "Software Development",
    "UI / UX Design",
    "Digital Design & Branding",
    "AI & ML",
    "Digital Marketing",
    "Support & Maintenance",
    "Other Service",
  ];

  const [tabs, setTabs] = useState(0);

  return (
    <>
      {/* hero section */}
      <section className=" pt-20  lg:px-10 px-4 py-6 text-white bg-[url(./assets/images/servicesImages/heroSecBg.png)] bg-cover bg-center h-auto md:h-[600px] bg-no-repeat w-full ">
        <div className="md:mt-18 mt-10">
          <p className="lg:text-2xl text-base font-medium">Services</p>
          <h1 className="lg:text-3xl  md:text-[28px] text-[24px]  font-bold lg:mt-4 mt-3 ">
            <span className="text-[#368DE5]">Future-Ready</span> IT Services for{" "}
            <br /> Your Business
          </h1>
          <p className="lg:mt-12 md:mt-8 mt-4 text-base font-light">
            Our IT services empower businesses with <br /> innovative, tailored
            solutions to enhance <br /> productivity, streamline operations, and
            drive growth.
          </p>
        </div>
      </section>

      {/* We Are IT Guidance  section*/}

      <section className="container mx-auto text-white lg:px-10 px-4 py-6 flex lg:flex-row flex-col lg:gap-0 gap-6 lg:mt-24 md:mt-18 mt-8">
        {/* left section */}
        <div className="lg:w-1/2 w-full">
          <h1 className="lg:text-3xl  md:text-[28px] text-[24px] font-bold">
            Tailored <span className="text-[#368DE5]">IT Solutions</span> for
            Your <br /> Success
          </h1>
          <p className="lg:text-lg md:text-base text-sm text-white/85  lg:mt-12 md:mt-8 mt-6 ">
            we understand that every business is unique,
            <br /> with its own set of challenges, goals, and <br />{" "}
            aspirations. That's why we offer tailored IT <br /> solutions
            designed.
          </p>

          <button className="md:py-[10px] md:px-[20px] px-3 py-2.5 border border-[#368DE5] rounded-lg text-[#368DE5] text-[16px] lg:mt-[80px] md:mt-10 mt-7 cursor-pointer hover:bg-gradient-to-r hover:from-[#368DE5] hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out ">
            Talk to Expert{" "}
            <span className="inline-flex text-lg   ">
              <GoArrowUpRight />
            </span>
          </button>
        </div>

        {/* right section */}
        <div className="lg:w-1/2 w-full">
          <img
            className="w-full h-full object-contain"
            src={searchImg}
            alt="lock img"
          />
        </div>
      </section>

      {/* IT Expertise  section*/}

      <section className="lg:px-10 px-4 py-6 lg:mt-24 md:mt-12 mt-8 text-white">
        <div className="grid md:grid-cols-4 grid-cols-1 w-full gap-4 ">
          {/* grid card 1 */}

          <div className=" md:border-r-2 md:border-l-0 md:border-t-0 md:border-b-0   md:border-[#505050] border-l border-t border-b border-[#505050] border-r md:p-0 p-4 rounded-md md:rounded-none">
            <div className="flex items-center gap-4 ">
              <div className="md:w-13 md:h-13 w-9 h-9">
                <img
                  src={ItExpertise}
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="lg:text-2xl md:text-xl text-lg font-bold">IT Expertise</p>
            </div>
            <p className="text-sm font-light mt-7">
              IT Expertise offers specialized knowledge to optimize technology
              solutions and drive business efficiency.
            </p>
          </div>

          {/* grid card 2 */}
          <div className="md:border-none border border-[#505050] p-4 md:p-0 rounded-md">
            <div className="flex items-center gap-4  ">
              <div className="md:w-13 md:h-13 w-9 h-9">
                <img
                  src={support}
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="lg:text-2xl md:text-xl text-lg font-bold">24/7 IT Support</p>
            </div>
            <p className="text-sm font-light mt-7">
              24/7 IT Support ensures continuous, reliable assistance to resolve
              technical issues anytime, day or night.
            </p>
          </div>

          {/* grid card 3 */}
          <div className="md:col-span-2  md:border-none border border-[#505050] p-4 md:p-0 rounded-md">
            <div className="md:flex items-start md:gap-x-4 ">
              <div className="h-full lg:w-[50%] md:w-auto xl:w-auto">
                <img src={customSolution} alt="icon" className="w-full h-full" />
              </div>
              <div className="lg:w-[50%] xl:w-auto">
                <h4 className=" lg:text-2xl md:text-xl text-lg font-bold md:mt-0  mt-3 ">Custom Solution</h4>
                <p className="text-sm font-light md:mt-6 mt-3">
                  IT Expertise offers specialized knowledge to optimize
                  technology solutions and drive business efficiency.
                </p>

                <button className="md:px-4 md:py-3 px-3 py-2 border border-[#368DE5] rounded-lg mt-3 font-medium text-[#368DE5] cursor-pointer hover:bg-gradient-to-r hover:from-[#368DE5] hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out">
                  Find Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-10 px-4 py-6 lg:mt-24 md:mt-18 mt-8">
        <div className=" text-white">
          <div className="">
            <h3 className=" lg:text-2xl md:text-lg text-base">Experience</h3>
            <h2 className="lg:text-3xl  md:text-[28px] text-[24px] font-bold mt-2">
              Grow Your <span className="text-[#368DE5]">Online Presence</span>
            </h2>

            <div className=" md:flex justify-between items-end  ">
              <p className="text-gray-300 mt-4 md:text-base text-sm">
                Grow Your Online Presence with tailored strategies to <br />{" "}
                enhance visibility, engagement, and brand recognition.
              </p>
              <button className="md:px-4 md:py-3 px-3 py-2 border border-[#368DE5] rounded-lg font-medium text-[#368DE5] cursor-pointer hover:bg-gradient-to-r hover:from-[#368DE5] hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out  md:mt-0 mt-4">
                Get Started
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mt-12 ">
            <div className="lg:w-1/2 w-full">
              <img
                src={digitalImg}
                alt="Digital Hands"
                className=" h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col gap-y-12">
              {[
                {
                  percent: "90%",
                  title: "Creative Approach",
                  description:
                    "Creative Approach blends innovation and strategy to deliver unique, impactful solutions.",
                },
                {
                  percent: "99%",
                  title: "Guaranteed Success",
                  description:
                    "Guaranteed Success ensures proven strategies and consistent results for achieving your business goals.",
                },
                {
                  percent: "85%",
                  title: "Brand Strategy",
                  description:
                    "Brand Strategy defines your market position and drives growth through clear, impactful planning.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center md:p-4 p-3 bg-[#001118] rounded-l-full rounded-r-[20px]"
                >
                  <span className=" text-white bg-[#368DE5] font-bold lg:text-2xl text-lg md:w-20 md:h-20 h-19 w-19 flex items-center justify-center rounded-full p-8">
                    {item.percent}
                  </span>
                  <div className="ml-4">
                    <h4 className=" lg:text-2xl md:text-lg text-base lg:font-extrabold font-bold">{item.title}</h4>
                    <p className=" md:text-base text-sm font-light md:font-normal ">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we work section */}
      <section className="container mx-auto lg:px-10 px-4 py-6 text-white lg:mt-24 md:mt-18 mt-6">
        <div className="flex flex-col justify-between items-center">
          <p className="lg:text-2xl md:text-lg text-base ">How we work</p>
          <h1 className="lg:text-3xl  md:text-[28px] text-[24px] font-bold md:mt-5 mt-3 text-center">
            <span className="text-[#368DE5]">Our Process</span> For Delivering{" "}
            <br className="sm:block hidden" /> Results
          </h1>

          <p className="text-base font-light lg:mt-12 md:mt-6 mt-3 text-center">
            Our IT services empower businesses with innovative, <br className="sm:block hidden"/> tailored
            solutions to enhance productivity, streamline <br className="sm:block hidden" /> operations, and
            drive growth.
          </p>
        </div>

        <div className="mt-12 flex md:flex-row flex-col md:justify-between items-baseline w-full md:gap-0 gap-8">
          {/* card 1 */}
          <div className="flex md:flex-col flex-row  md:justify-center justify-between items-center gap-y-2 md:w-fit w-full">
            <span className="md:w-20 md:h-20 h-18 w-18 flex items-center justify-center rounded-full bg-[#368DE5] lg:text-3xl  md:text-[28px] text-[24px] font-bold">
              01
            </span>
            <img src={arrow} alt="arrow-icon" className="-rotate-90 md:rotate-0" />

            <p className="text-center w-fit lg:text-2xl md:text-xl text-lg font-bold">
              Make an <br  /> Apointment
            </p>
          </div>

          <span className="md:block hidden">
            <img src={arrowStraight} alt="arrow-icon" />
          </span>

          {/* card 2 */}
          <div className="flex md:flex-col flex-row md:justify-center justify-between items-center gap-y-2 md:w-fit w-full">
            <span className="md:w-20 md:h-20 w-18 h-18 flex items-center justify-center rounded-full bg-[#368DE5] lg:text-3xl  md:text-[28px] text-[24px] font-bold">
              02
            </span>
            <img src={arrow} alt="arrow-icon" className="-rotate-90 md:rotate-0" />

            <p className="text-center w-fit lg:text-2xl md:text-xl text-lg font-bold">
              Meet Our <br  />
              Team
            </p>
          </div>

          <span className="md:block hidden">
            <img src={arrowStraight} alt="arrow-icon" />
          </span>
          {/* card 3 */}
          <div className="flex md:flex-col flex-row md:justify-center justify-between items-center gap-y-2 md:w-fit w-full">
            <span className="md:w-20 md:h-20 w-18 h-18 flex items-center justify-center rounded-full bg-[#368DE5] lg:text-3xl  md:text-[28px] text-[24px] font-bold">
              03
            </span>
            <img src={arrow} alt="arrow-icon" className="-rotate-90 md:rotate-0" />

            <p className=" text-center w-fit lg:text-2xl md:text-xl text-lg font-bold">
              Get <br  />
              Consultation
            </p>
          </div>

          <span className="md:block hidden">
            <img src={arrowStraight} alt="arrow-icon" />
          </span>
          {/* card 4 */}
          <div className="flex md:flex-col flex-row md:justify-center justify-between items-center gap-y-2 md:w-fit w-full">
            <span className="md:w-20 md:h-20 w-18 h-18 flex items-center justify-center rounded-full bg-[#368DE5] lg:text-3xl  md:text-[28px] text-[24px] font-bold">
              04
            </span>
            <img src={arrow} alt="arrow-icon" className="-rotate-90 md:rotate-0" />

            <p className="text-center w-fit lg:text-2xl md:text-xl text-lg font-bold">
              Start <br   />
              Project
            </p>
          </div>
        </div>
      </section>

      {/* Our Services section */}
      <section className="container mx-auto lg:px-10 px-4 py-6 text-white lg:mt-24 md:mt-18 mt-8">
        <p className="lg:text-2xl md:text-xl text-lg md:mb-7 mb-3">Our Services</p>

        <div className="flex md:flex-row flex-col justify-between md:items-end">
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-[24px] lg:font-extrabold font-bold">
            Future-Ready{" "}
            <span className="text-[#368DE5]">
              IT <br className="sm:block hidden" /> Solutions
            </span>
            .
          </h1>
          <p className="text-base font-light mt-4 md:mt-0">
            Future-Ready IT Solutions deliver innovative, scalable technologies
            to ensure <br /> long-term success and adaptability in a rapidly
            changing digital landscape.
          </p>
        </div>

        {/* cards section */}
        <div className="grid md:grid-cols-3  grid-cols-1 gap-6 mt-12 w-full">
          {[
            {
              icon: crmDesktop,
              title: "CRM Solutions And Design",
              desc: "CRM Solutions and Design delivers customized CRM strategies to enhance business relationships and growth.",
            },
            {
              icon: codeDesktop,
              title: "Website Development",
              desc: "Website Development crafts responsive, user-friendly sites to boost online presence and engagement.",
            },
            {
              icon: analytics,
              title: "Data Analytics",
              desc: "Data Analytics transforms raw data into actionable insights for informed decision-making.",
            },
            {
              icon: settings,
              title: "IT Management Service",
              desc: "IT Management Service streamlines technology operations to ensure efficiency and reliability.",
            },
            {
              icon: uiux,
              title: "UI/UX Design",
              desc: "UI/UX Design creates intuitive and engaging interfaces for exceptional user experiences.",
            },
            {
              icon: bulb,
              title: "Technology Solution",
              desc: "Technology Solution delivers innovative tools to drive efficiency and business success.",
            },
          ].map((card, index) => (
            <div key={index} className="bg-[#001118] rounded-[20px] p-4 ">
              <div className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px]">
                <img
                  className="w-full h-full object-contain"
                  src={card.icon}
                  alt={card.title}
                />
              </div>

              <div className="lg:mt-12 md:mt-8 mt-4">
                <h3 className="lg:text-2xl md:text-xl text-lg font-bold">{card.title}</h3>
                <p className="md:text-base text-sm font-normal mt-5">{card.desc}</p>
              </div>

              <div className="flex md:text-sm text-xs items-end text-[#368DE5] mt-5">
                <p>Read More </p>
                <GoArrowUpRight className="text-xl" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile App Development section */}
      <section className="container mx-auto  lg:px-10 px-4 py-6 text-white lg:mt-24 md:mt-18 mt-8 flex flex-col md:flex-row   gap-6">
        {/* left section */}
        <div className="md:w-1/2 w-full relative h-fit">
          <div className="absolute md:left-[4.5px] left-[3.5px] top-0 h-full w-[2px] bg-[#8E90FF]"></div>

          {services.map((service, index) => (
            <div key={index} className="relative flex items-center lg:mb-8 md:mb-8 mb-3">
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 md:w-3 md:h-3 w-2 h-2 ${
                  index === tabs ? "bg-[#7C3AED]" : "bg-[#8E90FF]"
                } rounded-full`}
              ></div>

              <p
                className={`ml-10  lg:text-2xl md:text-xl text-lg font-bold cursor-pointer  ${
                  index === tabs ? "text-[#7C3AED]  font-bold" : ""
                }`}
                onClick={() => setTabs(index)}
              >
                {service}
              </p>
            </div>
          ))}
        </div>
        {/* right section */}
        <div className="md:w-1/2 w-full bg-[#111111] rounded-[20px] lg:p-12 md:p-6 p-4">
          <h3 className="lg:text-2xl md:text-xl text-lg font-bold">
            {tabs === 0 &&
              " Mobile App Development That Turns Your Ideas Into Reality"}
            {tabs === 1 && "Web Development That Turns Your Ideas Into Reality"}
            {tabs === 2 &&
              "Software Development That Turns Your Ideas Into Reality"}
            {tabs === 3 &&
              "UI/UX Design Development That Turns Your Ideas Into Reality"}
            {tabs === 4 &&
              "Digital Design & Branding That Turns Your Ideas Into Reality"}
            {tabs === 5 && "AI & ML That Turns Your Ideas Into Reality"}
            {tabs === 6 &&
              "Digital Marketing That Turns Your Ideas Into Reality"}
            {tabs === 7 &&
              "Support & Maintenance That Turns Your Ideas Into Reality"}
            {tabs === 8 && "Other Services That Turns Your Ideas Into Reality"}
          </h3>

          <p className="text-sm font-normal md:mt-8 mt-6">
            To make an app with the capability of earning billions, you need a
            reliable tech partner
          </p>

          <div className="grid grid-cols-2 mt-7 w-full gap-y-5 gap-x-2">
            <div className="flex items-start gap-x-2 text-sm">
              {" "}
              <BiPlay className="text-xl" /> <p>Android App Development</p>
            </div>

            <div className="flex items-start gap-x-2 text-sm">
              {" "}
              <BiPlay className="text-xl" /> <p>IOS App Development</p>
            </div>

            <div className="flex items-start gap-x-2 text-sm">
              {" "}
              <BiPlay className="text-2xl " />{" "}
              <p>React Native Cross Platform App Development</p>
            </div>

            <div className="flex items-start gap-x-2 text-sm">
              {" "}
              <BiPlay className="text-2xl" />{" "}
              <p>Flutter Cross Platform App Development</p>
            </div>

            <div className="flex items-start gap-x-2 text-sm">
              {" "}
              <BiPlay className="text-xl" />{" "}
              <p>Mobile App Support & Maintenance</p>
            </div>

            <div className="flex items-start gap-x-2 text-sm">
              {" "}
              <BiPlay className="text-xl" /> <p>Mobile App Testing</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-7 ">
            <div className="grid grid-cols-3  w-full gap-8 ">
              {tabs === 0 ? (
                <>
                  <BsAndroid2 className="text-4xl" />
                  <FaReact className="text-4xl" />
                  <FaSwift className="text-4xl" />
                  <FaApple className="text-4xl" />
                  <FaFlutter className="text-4xl" />
                  <SiKotlin className="text-4xl" />
                </>
              ) : (
                <>
                  <FaNodeJs className="text-4xl"/>
                  <FaPython className="text-4xl"/>
                  <FaPhp className="text-4xl"/>
                  <FaLaravel className="text-4xl"/>
                  <FaJava className="text-4xl"/>
                  <SiNestjs className="text-4xl"/>
                </>
              )}
            </div>

            <div className="  h-full flex justify-center items-center w-full">
              <div className="border border-white  p-4 rounded-xl">
                <p className="text-2xl font-bold">Hire</p>
                <p className="text-sm font-medium">Developer</p>
                <span className="mt-2 inline-block">
                  <img src={longArrow} alt="arrow" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unicorn tech Specialist in CRM and Web Development section */}
      <section className="container mx-auto  lg:px-10 px-4 py-6 text-white lg:mt-24 md:mt-18 mt-8">
        <h1 className="text-center lg:text-3xl  md:text-[28px] text-[24px] font-bold">
          Unicorn tech Specialist <br /> in{" "}
          <span className="text-[#368DE5]">CRM and Web Development</span>
        </h1>

        <div>
          <FeaturesSection />
        </div>
      </section>

      {/* Why us Better section */}

      <section className="container mx-auto  lg:px-10 px-4 py-6 text-white lg:mt-24 md:mt-18 mt-8 grid lg:grid-cols-2 grid-cols-1 lg:gap-45 gap-5">
        {/* left section */}
        <div className="lg:w-[500px] lg:h-[530px] xl:w-[550px] xl:h-[530px] h-auto w-auto  ">
          <img
            src={whyUsSecImg}
            alt="Why-us"
            className="w-full h-full object-contain"
          />
        </div>

        {/* right section */}
        <div className="flex flex-col  justify-center">
          <p className="lg:text-2xl md:text-xl text-lg font-normal">Why us Better</p>
          <h1 className="lg:text-3xl  md:text-[28px] text-[24px] font-bold md:mt-5 mt-3">
            Why Our Services are{" "}
            <span className="text-[#368DE5]">
              Better <br className="sm:block hidden" /> Than
            </span>{" "}
            Others?
          </h1>

          <div className="grid grid-cols-2 gap-x-10 gap-y-6 w-fit mt-10 ">
            {[
              "Quality Comes First",
              "Flexible Cooperation",
              "On-Time Delivery",
              "Transparent Costs",
              "Qualified Developers",
              "Quick Scale-up",
            ].map((item, index) => (
              <div key={index} className="bg-[#111111] rounded p-3">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* why our services are better than other */}
      <section className="container mx-auto  lg:px-10 px-4 py-18 text-white mt-10 mb-20 bg-img2   ">
        <div className=" text-white flex md:flex-row flex-col items-center justify-between gap-5  ">
          {/* Left Section - Content */}
          <div className="md:w-1/2 w-full">
            <h1 className="lg:text-3xl  md:text-[28px] text-[24px] font-bold">
              Why Our Services are{" "}
              <span className="text-[#368DE5]">
                {" "}
                Better <br className="sm:block hidden" /> Than
              </span>{" "}
              Others?
            </h1>
            <p className="text-base mt-8">
              Our services excel through tailored solutions, unmatched
              expertise, and a commitment to client success.
            </p>
            <ul className="list-disc pl-5 space-y-2 ms:text-lg text-base mt-12">
              <li>We are committed to providing quality IT services</li>
              <li>Really know the true needs and expectations of customers</li>
              <li>Provided by experts to help challenge critical activities</li>
              <li>Processes of achieving the excellence improvements</li>
            </ul>
          </div>

          {/* Right Section - Form */}
          <div className="md:w-1/2 w-full  rounded-lg shadow-lg  h-full">
            <form className="space-y-4 h-full">
              <div className="flex w-full gap-5 items-center">
                <input
                  type="text"
                  placeholder="Your Name..."
                  className="w-full p-2  text-white border border-gray-50 rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email..."
                  className="w-full p-2  text-white border border-gray-50 rounded"
                />
              </div>
              <div className="flex items-center gap-5">
                <select className="w-full p-2  text-white border border-gray-50 rounded">
                  <option>Inquiry...</option>
                </select>
                <input
                  type="tel"
                  placeholder="Your Phone..."
                  className="w-full p-2  text-white border border-gray-50 rounded"
                />
              </div>
              <textarea
                placeholder="Additional Details..."
                className="w-full p-2  text-white border border-gray-50 rounded h-24"
              ></textarea>
              <button
                type="submit"
                className="w-full mt-8 py-2 bg-[#368DE5] text-white rounded  hover:bg-gradient-to-r hover:from-[#368DE5] hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out cursor-pointer"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
