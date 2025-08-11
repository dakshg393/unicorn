import React, { useEffect } from "react";
import AboutUsHero from "../assets/images/AboutUsHero.png";
import expertsImg from "../assets/images/expertsImg.png";
import aboutUsLaptop from "../assets/images/aboutUsLaptop.png";
import clock from "../assets/images/clock.png";
import target from "../assets/images/target.png";
import eye from "../assets/images/eye.png";
import CEO from "../assets/images/CEO.png";
import application from "../assets/images/application.png";
import enterprise from "../assets/images/enterprise.png";
import business from "../assets/images/business.png";
import agency from "../assets/images/agency.png";
import company from "../assets/images/company.png";
import aboutUsSecImg from "../assets/images/aboutUsSecImg.png";
import { GoArrowUpRight } from "react-icons/go";
import Consultaing from "../assets/Consultaing.svg";
import GraphicDesign from "../assets/GraphicDesign.svg";
import ItServices from "../assets/ItServices.svg";
import Pen from "../assets/Pen.svg";
import SoftwareDev from "../assets/SoftwareDev.svg";
import Solution from "../assets/Solution.svg";
import memberImg from "../assets/images/memberImg.png";
import { Link, useLocation } from "react-router-dom";
const AboutPage = () => {


const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  const cardData = [
    {
      img: clock,
      title: "Our History",
      description:
        "Since 2020 we have been a visionary and a reliable software engineering partner for world-class brands. abbreviated as co.",
    },
    {
      img: target,
      title: "Our Mission",
      description:
        "A mission statement clarifies what the company wants to achieve, who they want to support, and why they want to support them. On the other hand",
    },
    {
      img: eye,
      title: "Our Vision",
      description:
        "A vision statement for a company or organization focuses on the potential inherent in the companys future; its about what they intend to be how you",
    },
  ];

  const memberData = [
    {
      name: "Yashwant Patidar",
      role: "Team Member",
      img: memberImg,
    },
    {
      name: "Sandeep Patidar",
      role: "Team Member",
      img: memberImg,
    },
    {
      name: "Jatin Puri",
      role: "Team Member",
      img: memberImg,
    },
    {
      name: "Piyush Bamniya",
      role: "Team Member",
      img: memberImg,
    },
  ];
  return (
    <div className="mt-24">
      <section className="  container mx-auto text-white lg:px-10 px-4 py-6 flex lg:flex-row flex-col lg:gap-0 gap-6 justify-between">
        <div className="lg:w-[40%] w-full">
          <p className="font-normal lg:text-2xl md:text-xl text-lg text-white ">About Us</p>
          <h1 className="font-extrabold lg:text-[32px] md:text-[28px] text-[24px] leading-[42px] sm:pr-30 md:mb-10 mb-3">
            We Provide You{" "}
            <span className="text-[#368DE5]">Flexible Services</span>
          </h1>
          <p className="font-light md:text-base text-sm">
            At UniCorn Tech, we pride ourselves on offering dynamic and IT to
            suit your specific requirements. Our flexible approach means we can
            adjust our offerings to accommodate your evolving needs, whether you
            require comprehensive IT infrastructure support, strategic
            consultancy, software development
          </p>
        </div>
        <div className="lg:w-[498px] lg:h-[403px] w-full h-full rounded-lg">
          <img
            src={AboutUsHero}
            alt="About Us"
            className=" rounded-lg w-full h-full "
          />
        </div>
      </section>
      <div className=" flex 2xl:w-[90%] w-[95%]  justify-between items-center  mx-auto  py-10 ">
        <div className="grid xl:grid-cols-2 grid-cols-1  sm:space-x-32 space-y-10 sm:gap-32 gap-4  ">
          {/* Left Side: Images */}
          <div className="relative xl:block   grid grid-cols-1 space-y-3 ">
            {/* Image 1 */}
            <img
              src={expertsImg}
              alt="Expert"
              className="rounded-[20px] mx-auto  lg:min-w-[580px] w-auto h-auto object-contain lg:ml-[72px]"
            />

            {/* Image 2 */}
            <img
              src={aboutUsLaptop}
              alt="About us "
              className="rounded-[20px] absolute xl:bottom-[-12%]  xl:left-[-3%] bottom-[12%] -left-[9%] w-full hidden xl:block 
               max-w-[337px]  h-auto "
            />
            <p
              className="text-2xl font-bold text-white  absolute 2xl:bottom-[-5%]  2xl:right-[-16%] bottom-0 -right-[43%]   hidden xl:block
               "
            >
              2+ Years of Experience
            </p>
          </div>
          {/* Right Side: Features */}
          <div className="space-y-2 text-white">
            <div className=" md:space-y-5 space-y-1 text-white ">
              <p className="2xl:text-2xl md:text-xl text-lg leading-10 font-normal">
                About Unicorn Tech
              </p>
              <h3 className="2xl:text-[40px]  lg:text-3xl md:text-2xl text-xl leading-12 font-bold">
                Experts in{" "}
                <span className="text-[#368DE5]"> Tech Evolution</span>.
              </h3>
              <p className="xl:text-base text-sm  font-light leading-7 text-wrap md:mr-48 tracking-wide">
                As an IT Solution and Services Company, we have a value in
                fulfilling our clients’ satisfaction.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-x-10 gap-x-2  md:gap-y-5 gap-y-10 lg:mt-20 md:mt-15 mt-10">
              <div className="md:space-y-5 space-y-3 2xl:pr-20 xl:pr-10 ">
                {" "}
                <h4 className="font-bold text-[18px] leading-6 text-wrap ">
                  Innovation and Adaptability
                </h4>
                <p className=" font-light text-sm  text-wrap">
                  Driving continuous innovation to deliver cutting-edge,
                  tailored solutions that evolve with technology and you needs.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-wrap font-thin leading-7 text-base tracking-wide ">
                  Experts in Tech Evolution lead businesses through cutting-edge
                  innovations to stay ahead in a dynamic digital world.
                </p>
              </div>
              <div className="md:space-y-5 space-y-2 pr-20">
                <h4 className="font-bold text-[18px] leading-6 text-wrap ">
                  Customer-Centric Excellence
                </h4>
                <p className="font-light text-sm  text-wrap">
                  Putting you at the heart of every solution to ensure
                  unparalleled service, reliability, and value.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex flex-col gap-y-2 ">
                  <div className="text-[#368DE5] flex justify-between w-[76%]">
                    <p>IT Support</p>
                    <p>86%</p>
                  </div>
                  <div className="w-[90%] relative bg-white h-1.5 rounded-full">
                    <span className=" absolute  bg-[#368DE5] rounded-full h-1.5 w-[76%]"></span>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="text-[#368DE5] flex justify-between w-[84%]">
                    <p>IT Security</p>
                    <p>94%</p>
                  </div>
                  <div className="w-[90%] relative bg-white h-1.5 rounded-full">
                    <span className=" absolute  bg-[#368DE5] rounded-full h-1.5 w-[84%]"></span>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="text-[#368DE5] flex justify-between w-[80%]">
                    <p> Cloud Support</p>
                    <p>90%</p>
                  </div>
                  <div className="w-[90%] relative bg-white h-1.5 rounded-full">
                    <span className=" absolute  bg-[#368DE5] rounded-full h-1.5 w-[80%]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card section */}
      <div className="w-[90%] mx-auto">
        <div className="w-full mt-20 grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-4">
          {cardData.map((card, idx) => (
            <Card key={idx} card={card}></Card>
          ))}
          <div className="flex justify-between flex-col my-10">
            <h1 className="text-wrap italic font-bold md:text-[27px] text-lg sm:leading-7 text-white">
              " We don’t just adapt to the future; we shape it with innovation.
              "
            </h1>
            <div className="w-full flex md:justify-center items-center sm:mt-0 mt-4 lg:mt-5 gap-5">
              <img src={CEO} alt="" />
              <div className="flex flex-col ">
                <p className="font-medium md:text-[22px] text-base text-white ">
                  Narendra Patidar
                </p>
                <p className="text-sm text-[#969696] font-medium">
                  CEO at Unicorn Tech
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full  mt-2  flex sm:justify-between justify-center sm:gap-0 gap-4 items-center flex-wrap gap-y-4">
          <img src={application} alt="" />
          <img src={business} alt="" />
          <img src={enterprise} alt="" />
          <img src={agency} alt="" />
          <img src={company} alt="" />
        </div> */}

        {/* Our Expertise section */}
        <div className=" mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-16 2xl:gap-32 text-white">
            {/* Expertise and Introduction Section */}
            <div className="flex flex-col space-y-4">
              <p className="font-normal  lg:text-2xl md:text-xl text-lg">Our Expertise</p>
              <h1 className="font-bold md:text-[28px] lg:text-[32px] text-xl">
                Innovating Across{" "}
                <span className="text-[#368DE5]">Every Sector</span>.
              </h1>
              <p className="md:text-base text-sm font-light">
                With over a decade of experience, we specialize in delivering
                customized IT solutions for healthcare, finance, retail and many
                more sectors of industry.
              </p>
              <div className="w-full sm:w-4/5">
                <Link to={'/services'}>
                  <button className="flex items-center gap-3 py-1 px-3 border border-[#368DE5] rounded-sm text-[#368DE5] text-base md:text-[16px] md:mt-8 mt-4 hover:bg-gradient-to-r hover:from-[#368DE5] hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out">
                    Get an Estimated <GoArrowUpRight />
                  </button>
                </Link>
              </div>
            </div>

            {/* Statistics and Features Section */}
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex md:flex-col flex-row md:items-start items-center md:gap-0  gap-3">
                  <span className="md:text-3xl lg:text-[40px] text-xl text-[#368DE5] font-bold">
                    11
                  </span>
                  <p className="text-base md:text-[20px] font-bold">
                    IT Standard Certification
                  </p>
                </div>
                <div className="flex md:flex-col flex-row md:items-start items-center md:gap-0 gap-3">
                  <span className="md:text-3xl lg:text-[40px] text-xl text-[#368DE5] font-bold">
                    +19
                  </span>
                  <p className="text-lg md:text-[20px] font-bold">
                    Specific of Industries
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="md:text-2xl lg:text-3xl text-xl font-bold">Advance Tool</h1>
                <p className="md:text-base text-sm font-light">
                  We use a powerful open source platform to automate the
                  deployment, scaling, and management of containerized
                  applications.
                </p>
              </div>
              <div className="space-y-2">
                <h1 className="md:text-2xl lg:text-3xl text-xl font-bold">
                  Edge Computing
                </h1>
                <p className=" text-sm  md:text-base font-light">
                  We optimize cloud capabilities for faster response times and
                  reduced latency.
                </p>
              </div>
              <div className="space-y-2">
                <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold">
                  Tech Methodology
                </h1>
                <p className=" text-sm md:text-base font-light">
                  We take a flexible and iterative approach to software
                  development, enabling faster delivery, continuous improvement,
                  and response to your changing needs.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:col-span-2 flex justify-center items-center">
              <img
                src={aboutUsSecImg}
                alt="Illustration representing our expertise in IT solutions"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        {/* What we Offer */}
        <div className=" relative w-full mt-32  bg-[url(./assets/images/offer.png)]   h-[508px] border border-[#1B006B] bg-cover bg-center ">
          {/* Blur overlay */}
          <div className="absolute xl:my-10 xl:mx-20 lg:my-7 lg:mx-14  md:mx-8 md:my-4  m-4 inset-0 text-white bg-[#0B0A72]/50 backdrop-blur-lg rounded-[20px] flex flex-col justify-center items-center">
            <div className=" w-full sm:px-10 px-4 grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-2">
              <div className="col-span-2 ">
                <p className="lg:text-2xl md:text-xl text-lg font-normal">Our Features</p>
                <h2 className="lg:text-[42px] md:text-3xl text-2xl leading-11 font-bold">
                  What we Offer
                </h2>
              </div>
              <div className="flex border border-[#368DE5] rounded-sm lg:p-5 p-2 items-center sm:gap-4 gap-2 backdrop-blur-lg">
                <p className="sm:text-base text-xs">Web Development</p>
                <img
                  className="sm:w-auto sm:h-auto w-8 h-8 lg:w-8 lg:h-8 xl:h-auto xl:w-auto"
                  src={Pen}
                  alt=""
                />
              </div>
              <div className="flex border border-[#368DE5] rounded-sm lg:p-5 p-2 items-center sm:gap-4 gap-2 backdrop-blur-lg">
                <p className="sm:text-base text-xs">Graphic Design</p>
                <img
                  className="sm:w-auto sm:h-auto w-8 h-8 lg:w-8 lg:h-8 xl:h-auto xl:w-auto"
                  src={GraphicDesign}
                  alt=""
                />
              </div>
              <div className="flex border border-[#368DE5] rounded-sm lg:p-5 p-2 items-center sm:gap-4 gap-2 backdrop-blur-lg">
                <p className="sm:text-base text-xs">Managed IT Services</p>
                <img
                  className="sm:w-auto sm:h-auto w-8 h-8 lg:w-8 lg:h-8 xl:h-auto xl:w-auto"
                  src={ItServices}
                  alt=""
                />
              </div>
              <div className="flex border border-[#368DE5] rounded-sm lg:p-5 p-2 items-center  sm:gap-4 gap-2 backdrop-blur-lg">
                <p className="sm:text-base text-xs">Web Case Solution</p>
                <img
                  className="sm:w-auto sm:h-auto w-8 h-8 lg:w-8 lg:h-8 xl:h-auto xl:w-auto"
                  src={Solution}
                  alt=""
                />
              </div>
              <div className="flex border border-[#368DE5] rounded-sm lg:p-5 p-2 items-center sm:gap-4 gap-2 backdrop-blur-lg">
                <p className="sm:text-base text-xs">Software Developmen</p>
                <img
                  className="sm:w-auto sm:h-auto w-8 h-8 lg:w-8 lg:h-8 xl:h-auto xl:w-auto"
                  src={SoftwareDev}
                  alt=""
                />
              </div>
              <div className="flex border border-[#368DE5] rounded-sm lg:p-5 p-2 items-center sm:gap-4 gap-2 backdrop-blur-lg">
                <p className="sm:text-base text-xs">IT Consulting Services</p>
                <img
                  className="sm:w-auto sm:h-auto w-8 h-8 lg:w-8 lg:h-8 xl:h-auto xl:w-auto"
                  src={Consultaing}
                  alt=""
                />
              </div>
            </div>
            <div className=" w-full  sm:px-10 px-2 flex justify-between items-center lg:mt-10 mt-3">
              <h4 className="font-bold lg:text-[32px] text-base lg:leading-10">
                Great Solutions for your business growth!
              </h4>
              <button className="   sm:py-[5px] sm:px-[10px] py-1 px-2 sm:text-base text-xs  border border-[#368DE5] rounded-sm text-[#368DE5]  cursor-pointer hover:bg-gradient-to-r hover:from-[#368DE5] hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out ">
                Get top of the page
              </button>
            </div>
          </div>
        </div>

        {/* team members */}
        <div id="team" className="w-full space-y-10 text-white lg:my-32 md:my-28 my-20">
          <div className=" w-full flex flex-col justify-between items-center gap-y-5">
            <p className="lg:text-2xl md:text-xl text-lg font-normal ">Our Expert Team Members </p>
            <h4 className="lg:text-[32px] md:text-2xl text-xl font-bold md:leading-[40px] leading-5">
              Strength in <span className="text-[#368DE5]">Skilled Teams</span>.
            </h4>
            <p className="font-light md:text-base text-sm md:mt-5 mt-1 text-center ">
              Our team's strength lies in combining technical expertise,
              innovation, and collaboration to deliver exceptional IT solutions.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-10">
            {memberData.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ card }) => (
  <div className=" bg-[#001118] rounded-[20px] px-3 py-5 text-white flex flex-col md:items-start  items-center ">
    <img src={card.img} className="lg:w-24 lg:h-24 md:w-18 md:h-18 w-12 h-12 object-center" />
    <p className="lg:text-2xl md:text-xl text-lg font-bold my-5">{card.title}</p>
    <p className="text-xs font-normal">{card.description}</p>
  </div>
);

const MemberCard = ({ member }) => (
  <div className="bg-[#000C11] rounded-[20px]">
    <div className="bg-[#00141C] rounded-t-[20px] flex justify-center items-center">
      <img className="w-2xs h-auto rounded-t-[20px]" src={member.img} alt="" />
    </div>
    <div className=" pl-5  pt-4 pb-3 flex flex-col gap-y-3 rounded-b-[20px]">
      <p className="md:text-2xl text-lg font-bold">{member.name}</p>
      <p className="text-sm">{member.role}</p>
    </div>
  </div>
);
export default AboutPage;
