import React, { useState } from "react";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Bullion from "../assets/images/Bullion_Funded.png";
import TourParent from "../assets/images/TourParent.png";
import ForexPilot from "../assets/images/ForexPilot.png";
import RGglobel from "../assets/images/RGglobel.png";
import Real_Estate_Web from "../assets/images/Real_Estate_Web.png";
import InvestUs from "../assets/images/InvestUs.png";
import Campus from "../assets/images/Campus_Update_Web.png";
import Programmers_Point from "../assets/images/Programmers_Point.png";
import Anurao from "../assets/images/AnuraoPrinting.png";
import PrakashTreder from "../assets/images/PrakashTreder.png";
import TravalCRM from "../assets/images/TravalCRM.png";
import FundedCRM from "../assets/images/FundedCRM.png";
import ui1 from "../assets/images/ui1.png";
import ui2 from "../assets/images/ui2.png";
import ui3 from "../assets/images/ui3.png";
import ui4 from "../assets/images/ui4.png";
import Graphic1 from "../assets/images/Graphic1.png";
import Graphic2 from "../assets/images/graphic1.png";
import Graphic3 from "../assets/images/Graphic3.png";
import Graphic4 from "../assets/images/Graphic4.png";
import Graphic5 from "../assets/images/Graphic5.png";
import ReadyToWork from "../components/ReadyToWork";

const Portfolio = () => {
  const [clickedButton, setClickedButton] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "Mobile App",
    "Ecommerce",
    "Accounting Software",
    "CRM",
    "UI/UX Design",
    "Graphic Design",
  ];

  const Projects = [
    {
      name: "Bullion Funded",
      image: Bullion,
      url: "https://bullionfunded.com/",
      cat: "Web Development",
    },
    {
      name: "Tour Parent",
      image: TourParent,
      url: "https://tourparent.com/",
      cat: "Web Development",
    },
    {
      name: "Forex Pilot",
      image: ForexPilot,
      url: "https://www.forexpilot.info/",
      cat: "Web Development",
    },
    {
      name: "R&G Global Research",
      image: RGglobel,
      url: "",
      cat: "Web Development",
    },
    {
      name: "Real-Estate Website",
      image: Real_Estate_Web,
      url: "",
      cat: "Web Development",
    },
    {
      name: "Invest us",
      image: InvestUs,
      url: "https://investus.co.in/",
      cat: "Web Development",
    },
    {
      name: "Campus Update Web",
      image: Campus,
      url: "",
      cat: "Web Development",
    },
    {
      name: "Programmers Point",
      image: Programmers_Point,
      url: "",
      cat: "Web Development",
    },
    {
      name: "Anurao Printing",
      image: Anurao,
      url: "https://www.anuraoprinting.com/",
      cat: "Ecommerce",
    },
    { name: "Prakash Trader", image: PrakashTreder, url: "", cat: "CRM" },
    { name: "Travel CRM", image: TravalCRM, url: "", cat: "CRM" },
    { name: "Funded CRM", image: FundedCRM, url: "", cat: "CRM" },
    { image: ui1, cat: "UI/UX Design" },
    { image: ui2, cat: "UI/UX Design" },
    { image: ui3, cat: "UI/UX Design" },
    { image: ui4, cat: "UI/UX Design" },
    { image: Graphic1, cat: "Graphic Design" },
    { image: Graphic2, cat: "Graphic Design" },
    { image: Graphic3, cat: "Graphic Design" },
    { image: Graphic4, cat: "Graphic Design" },
    { image: Graphic5, cat: "Graphic Design" },
  ];

  const handleClickedButton = (category) => {
    setClickedButton(category);
  };

  const filteredProjects =
    clickedButton === "All"
      ? Projects.filter((project) =>
          ["Web Development", "Ecommerce", "CRM"].includes(project.cat)
        )
      : Projects.filter((project) => project.cat === clickedButton);

  return (
    <>
      <div className="lg:mb-32 md:mb-25 mb-10 w-full md:h-[593px] h-96 flex justify-start items-center text-white bg-center bg-cover bg-no-repeat bg-[url(./assets/images/portfolioHero.png)]">
        <div className="lg:px-14 md:w-[40%] px-5 w-full">
          <p className="font-light lg:text-2xl md:text-xl text-lg md:tracking-wide">Latest Portfolio</p>
          <h2 className="lg:text-5xl md:text-4xl text-2xl  font-bold md:tracking-widest md:leading-16 leading-8">
            Where Innovation Meets{" "}
            <span className="text-primary">IT Excellence</span>
          </h2>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="text-white md:px-14 px-5 flex  mx-auto md:gap-2  gap-2  overflow-x-auto   w-full justify-between lg:mb-24 md:mb-18 mb-10 scrollbar-hidden">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 md:text-lg text-base md:font-bold font-semibold md:py-2 py-1 rounded-md w-fit text-nowrap cursor-pointer ${
              clickedButton === category
                ? "bg-primary"
                : "bg-transparent hover:bg-primary"
            }`}
            onClick={() => handleClickedButton(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="md:w-4/5  w-full md:px-0 px-5 mx-auto ">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              if (
                ["Web Development", "Ecommerce", "CRM"].includes(project.cat)
              ) {
                return <ProjectCard key={index} project={project} />;
              } else if (
                ["UI/UX Design", "Graphic Design"].includes(project.cat)
              ) {
                return <ProjectCardTwo key={index} project={project} />;
              } else {
                return <ProjectCardThree key={index} project={project} />;
              }
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center h-[300px]">
            <ProjectCardThree project={null} />
          </div>
        )}
      </div>
    <ReadyToWork/>
    </>
  );
};

const ProjectCard = ({ project }) => (
  <div className="bg-[#001118] text-white rounded-t-[20px] rounded-b-[10px] overflow-hidden p-2">
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-auto object-cover rounded-[20px]"
    />
    <div className="flex justify-between items-center p-4">
      <div>
        <p className="text-primary">{project.cat}</p>
        <h3 className="md:text-xl text-base font-semibold">{project.name}</h3>
      </div>
      {project.url ? (
        <Link to={project.url}>
          <button className="flex items-center md:gap-3 gap-2 text-base border border-primary rounded-md px-2 py-1 cursor-pointer hover:bg-primary transition-colors duration-300 ease-linear  text-nowrap   ">
            <BsFillGrid1X2Fill /> Live Preview
          </button>
        </Link>
      ) : (
        <button className="flex items-center md:gap-3 gap-2 text-base border border-primary rounded-md px-2 py-1 text-nowrap  ">
          <BsFillGrid1X2Fill /> Live Preview
        </button>
      )}
    </div>
  </div>
);

const ProjectCardTwo = ({ project }) => (
  <div className="bg-[#002244] text-white rounded-2xl  overflow-hidden p-2">
    <img
      src={project.image}
      alt="Design Work"
      className="w-full h-auto object-cover rounded-[20px]"
    />
  </div>
);

const ProjectCardThree = ({ project }) => {
  if (!project) {
    return (
      <div className=" text-white text-center space-y-16">
        <p className="lg:text-4xl md:text-3xl text-2xl tracking-wider font-bold mt-5">
          Transforming Visions into Digital Realities.
        </p>

        <div className="flex justify-center items-start gap-8">
          <Link to={"/"}>
            <button className="md:px-6 md:py-3 px-3 py-2 text-center text-white rounded-md bg-gradient-to-b from-[#A9D4FF] to-[#368DE5] font-bold">
              Home
            </button>
          </Link>
          <button className="border rounded-lg font-bold md:px-6 md:py-3 px-3 py-2  ">
            Services
          </button>
        </div>
      </div>
    );
  }
};

export default Portfolio;
