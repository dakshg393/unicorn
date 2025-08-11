import React, { useState } from "react";

import { IoLogoAngular } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobexd,
  SiAnsible,
  SiClickup,
  SiKubernetes,
  SiMongodb,
  SiPhp,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { FaDocker, FaQuidditch, FaVuejs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";

import { FaNodeJs } from "react-icons/fa";
import {
  DiCodeigniter,
  DiGithub,
  DiIllustrator,
  DiMysql,
  DiPhotoshop,
  DiPostgresql,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";
import {
  FaApple,
  FaAws,
  FaFlutter,
  FaReact,
  FaTrello,
  FaWordpress,
} from "react-icons/fa6";
import { BsAndroid2, BsGithub } from "react-icons/bs";
import { BiLogoGoogleCloud, BiLogoPostgresql } from "react-icons/bi";

import { PiCheckFatFill } from "react-icons/pi";

import { GiQuickSlash, GiQuillInk } from "react-icons/gi";
import { FiFigma } from "react-icons/fi";

const TechnologiesTabs = () => {
  const [tabs, setTabs] = useState("Front End");
  return (
    <div className="overflow-hidden max-w-sm md:max-w-full w-full ">
      {/* tabs */}
      <div className="flex justify-between items-center overflow-x-auto md:max-w-full max-w-sm gap-3 scrollbar-hidden">
        {[
          "Front End",
          "Back End",
          "Mobile",
          "CMS",
          "Data Base",
          "Devops & Cloud",
          "Project Management",
          "Graphic Design & UI/UX",
        ].map((tab, index) => (
          <button
            key={index}
            className={`py-1 px-2 rounded-md text-lg font-semibold text-nowrap  cursor-pointer ${
              tabs === tab ? "bg-[#7C3AED]" : ""
            }`}
            onClick={() => setTabs(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {tabs === "Front End" && (
        <div className="flex flex-wrap justify-center gap-14 md:max-w-fit max-w-sm mx-auto mt-20">
          {[
            {
              icon: <IoLogoAngular />,
              name: "Angular",
            },
            {
              icon: <RiReactjsFill />,
              name: "React",
            },
            {
              icon: <SiTypescript />,
              name: "Typescript",
            },
            {
              icon: <FaVuejs />,
              name: "Vue",
            },
            {
              icon: <RiNextjsFill />,
              name: "Nextjs",
            },
            {
              icon: <FaBootstrap />,
              name: "Bootstrap",
            },
            {
              icon: <FaHtml5 />,
              name: "HTML",
            },
            {
              icon: <IoLogoCss3 />,
              name: "CSS",
            },
          ].map((data, index) => (
            <div className="flex flex-col gap-3 items-center" key={index}>
              <span className="text-5xl ">{data.icon}</span>
              <p className="text-lg font-medium">{data.name}</p>
            </div>
          ))}
        </div>
      )}

      {tabs === "Back End" && (
        <div className="flex flex-wrap justify-center gap-14 md:max-w-fit max-w-sm mx-auto mt-20">
          {[
            {
              icon: <FaNodeJs />,
              name: "NodeJs",
            },
            {
              icon: <DiCodeigniter />,
              name: "Codeigniter",
            },
            {
              icon: <SiExpress />,
              name: "ExpressJs",
            },
            {
              icon: <SiNestjs />,
              name: "NestJS",
            },
            {
              icon: <FaLaravel />,
              name: "Laravel",
            },
            {
              icon: <FaPython />,
              name: "Python",
            },
            {
              icon: <FaJava />,
              name: "Java",
            },
            {
              icon: <DiDotnet />,
              name: "Net",
            },
          ].map((data, index) => (
            <div key={index} className="flex flex-col gap-3 items-center">
              <span key={index} className="text-5xl ">
                {data.icon}
              </span>
              <p className="text-lg font-medium">{data.name}</p>
            </div>
          ))}
        </div>
      )}

      {tabs === "Mobile" && (
        <div className="flex flex-wrap justify-center gap-14 w-fit mx-auto mt-20">
          {[
            {
              icon: <FaReact />,
              name: "React Native",
            },
            {
              icon: <FaFlutter />,
              name: "Flutter",
            },
            {
              icon: <FaApple />,
              name: "IOS",
            },
            {
              icon: <BsAndroid2 />,
              name: "Android",
            },
          ].map((data, index) => (
            <div key={index} className="flex flex-col gap-3 items-center">
              <span className="text-5xl ">{data.icon}</span>
              <p className="text-lg font-medium">{data.name}</p>
            </div>
          ))}
        </div>
      )}

      {tabs === "CMS" && (
        <div className="flex flex-wrap justify-center gap-14 w-fit mx-auto mt-20">
          {[
            {
              icon: <FaWordpress />,
              name: "Wordpress",
            },
          ].map((data, index) => (
            <div key={index} className="flex flex-col gap-3 items-center">
              <span className="text-5xl ">{data.icon}</span>
              <p className="text-lg font-medium">{data.name}</p>
            </div>
          ))}
        </div>
      )}

      {tabs === "Data Base" && (
        <div className="flex gap-14 w-fit mx-auto mt-20">
          {[
            {
              icon: <SiMongodb />,
              name: "MongoDB",
            },
            {
              icon: <BiLogoPostgresql />,
              name: "PostgreSql",
            },
            {
              icon: <DiMysql />,
              name: "MySql",
            },
          ].map((data, index) => (
            <div key={index} className="flex flex-col gap-3 items-center">
              <span className="text-5xl ">{data.icon}</span>
              <p className="text-lg font-medium">{data.name}</p>
            </div>
          ))}
        </div>
      )}

      {tabs === "Devops & Cloud" && (
        <div className="flex flex-wrap justify-center gap-14 w-fit mx-auto mt-20">
          {[
            {
              icon: <BiLogoGoogleCloud />,
              name: "Google Cloud",
            },
            {
              icon: <FaAws />,
              name: "AWS",
            },
            {
              icon: <FaDocker />,
              name: "Docker",
            },
            {
              icon: <SiAnsible />,
              name: "Ansible",
            },
            {
              icon: <SiKubernetes />,
              name: "Kubernetes",
            },
            {
              icon: <BsGithub />,
              name: "GitHub",
            },
          ].map((data, index) => (
            <div key={index} className="flex flex-col gap-3 items-center">
              <span className="text-5xl ">{data.icon}</span>
              <p className="text-lg font-medium">{data.name}</p>
            </div>
          ))}
        </div>
      )}

      {tabs === "Project Management" && (
        <div className="flex flex-wrap justify-center gap-14 w-fit mx-auto mt-20">
          {[
            {
              icon: <SiClickup />,
              name: "Click Up",
            },
            {
              icon: <GiQuickSlash />,
              name: "Quixy",
            },
            {
              icon: <PiCheckFatFill />,
              name: "Wrike",
            },
            {
              icon: <FaTrello />,
              name: "Trello",
            },
          ].map((data, index) => (
            <div key={index} className="flex flex-col gap-3 items-center">
              <span className="text-5xl ">{data.icon}</span>
              <p className="text-lg font-medium">{data.name}</p>
            </div>
          ))}
        </div>
      )}

      {tabs === "Graphic Design & UI/UX" && (
        <div className="flex flex-wrap justify-center gap-14 w-fit mx-auto mt-20">
          {[
            {
              icon: <DiPhotoshop />,
              name: "Photoshop ",
            },
            {
              icon: <DiIllustrator />,
              name: "Illustrator",
            },
            {
              icon: <SiAdobepremierepro />,
              name: "Premiere Pro",
            },
            {
              icon: <SiAdobeaftereffects />,
              name: "After Effect",
            },
            {
              icon: <FiFigma />,
              name: "Figma",
            },
            {
              icon: <SiAdobexd />,
              name: "Adobe XD",
            },
          ].map((data, index) => (
            <div key={index} className="flex flex-col gap-3 items-center">
              <span  className="text-5xl ">
                {data.icon}
              </span>
              <p className="text-lg font-medium">{data.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TechnologiesTabs;
