import React from "react";
import webDevCardImg from "../assets/images/webDevCardImg.png";
import uiCardImg from "../assets/images/uiCardImg.png";
import datAnalystCardImg from "../assets/images/datAnalystCardImg.png";
import BackendCardImg from "../assets/images/BackendCardImg.png";
import { FaArrowRightLong } from "react-icons/fa6";
const CareerPage = () => {
  const CardData = [
    {
      Img: webDevCardImg,
      title: "Web Developer",
      Experience: "06 to 1+ year",
      Vacant: "2 Positions",
    },
    {
      Img: datAnalystCardImg,
      title: "Data  Analyst",
      Experience: "06 to 1+ year",
      Vacant: "1 Positions",
    },
    {
      Img: uiCardImg,
      title: "UI/UX Designer",
      Experience: "3 to 5+ year",
      Vacant: "2 Positions",
    },
    {
      Img: BackendCardImg,
      title: "Backend Developer",
      Experience: "06 to 2+ year",
      Vacant: "5 Positions",
    },
  ];
  return (
    <>
      <section className=" relative w-full md:h-screen h-[500px] flex justify-center items-start mb-52  text-white bg-center bg-cover bg-no-repeat bg-[url(./assets/images/CareerHero.png)]">
        <div className=" md:px-20 px-4 lg:w-[45%] w-full text-center md:mt-44 mt-28 md:space-y-5 space-y-3">
          <p className="lg:text-2xl md:text-xl text-lg font-light">Careers</p>
          <h2 className="lg:text-4xl md:text-2xl text-xl font-bold md:leading-14 leading-8 ">
            Unlock Doors to Endless{" "}
            <span className="text-primary"> Opportunities</span>
          </h2>
          <p className="md:text-lg text-base">
            Join IT Consultancy Services and lead innovations in cloud, data,
            and Web Developer
          </p>
        </div>
        <div className="absolute lg:-bottom-30 md:-bottom-5  -bottom-40 mx-3 md:w-[90%]  md:mx-auto md:h-fit py-5   border border-primary text-white md:py-5 bg-black/50 backdrop-blur-lg rounded-[20px] flex flex-col justify-center items-center md:px-20 px-5 text-center md:space-y-10 space-y-5 ">
          <h1 className="lg:text-[42px] md:text-3xl text-xl font-bold">
            Why Join <span className="text-primary">Our Team</span>
          </h1>
          <p className="font-medium lg:px-52  px-4 md:text-base text-sm ">
            We are growing fast and continuously looking to hire enterprising
            young engineers and management graduates to partner in our continued
            success
          </p>
          <p className="font-medium md:px-5 lg:px-52 px-4 md:text-base text-sm ">
            If you are a young graduate looking for an enriching work
            environment in the technology domain and are excited by tremendous
            professional and personal growth opportunities, Canopus is the place
            for you 
          </p>
        </div>
      </section>
      <div className="md:px-20 sm:px-10 px-3 lg:mt-60 md:mt-24 mt-10 text-white  container mx-auto">
        <h2 className="lg:text-4xl md:text-3xl text-xl  mb-10 font-bold ">
          Our Current <span className="text-primary">Vacancies</span>
        </h2>
        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-col-2 grid-cols-1  gap-4">
          {CardData.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>

      <section className="w-full md:px-20 sm:px-10 px-3 bg-[url(./assets/images/formBgImg.png)] bg-cover bg-no-repeat bg-center mt-15   py-10 mb-16">
        <div className="items-center flex  md:flex-row flex-col gap-5 text-white lg:px-10 px-4 py-6">
          {/* left section */}
          <div className="md:w-1/2 w-full ">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">Get into Touch</h1>

            <p className="md:text-base text-sm  font-light mt-4">
              Please select a topic below related to your inquiry. If you don’t
              find what you need, fill out our contact form.
            </p>

            <div className="mt-12 border-b border-white border-dashed w-fit pb-2">
              <h3 className="text-[#7C3AED] lg:text-2xl md:text-xl text-lg font-bold">
                Hire a Developer
              </h3>
              <div className="flex  gap-4 mt-2">
                <p className="md:text-base text-sm font-light">
                  Hire a dedicated developer to be an indistinguishable part of{" "}
                  <br /> your existing team
                </p>{" "}
                <span className="mt-1">
                  <FaArrowRightLong className="text-[#7C3AED]" />
                </span>
              </div>
            </div>

            <div className="mt-12 border-b border-white border-dashed w-fit pb-2">
              <h3 className="text-[#7C3AED] lg:text-2xl md:text-xl text-lg font-bold">Careers</h3>
              <div className="flex  gap-4 mt-2">
                <p className="md:text-base text-sm font-light">
                  Be a part of the best work family across the globe and boost{" "}
                  <br /> your career in Tech
                </p>{" "}
                <span className="mt-1">
                  <FaArrowRightLong className="text-[#7C3AED]" />
                </span>
              </div>
            </div>
          </div>

          {/* right section */}

          <div className="flex justify-center items-center md:w-1/2 w-full ">
            <div className="bg-[#00070D80]/50 p-6 rounded-[20px] backdrop-blur-lg  md:w-96 w-full border border-[#7C3AED] ">
              <form className="space-y-4">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-1/2 bg-transparent border-b border-[#7C3AED] text-white outline-none p-2"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-1/2 bg-transparent border-b border-[#7C3AED] text-white outline-none p-2"
                  />
                </div>
                <div className="flex space-x-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-1/2 bg-transparent border-b border-[#7C3AED] text-white outline-none p-2"
                  />
                  <input
                    type="text"
                    placeholder="Current Company"
                    className="w-1/2 bg-transparent border-b border-[#7C3AED] text-white outline-none p-2"
                  />
                </div>
                <div className="flex space-x-4">
                  <input
                    type="number"
                    placeholder="Current CTC"
                    className="w-1/2 bg-transparent border-b border-[#7C3AED] text-white outline-none p-2"
                  />
                  <input
                    type="number"
                    placeholder="Experience"
                    className="w-1/2 bg-transparent border-b border-[#7C3AED] text-white outline-none p-2"
                  />
                </div>

                <select className="w-full  border-b border-[#7C3AED] text-white bg-black outline-none p-2">
                  <option value="" disabled selected hidden>
                    Please select an option
                  </option>
                  <option value="opt1">opt1</option>
                  <option value="opt2">opt2</option>
                  <option value="opt3">opt3</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-transparent border border-[#368DE5] text-[#368DE5] p-2 rounded-lg hover:bg-gradient-to-r hover:from-[#368DE5] hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out cursor-pointer text-base font-medium mt-24  "
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="text-white w-[90%] mx-auto flex sm:flex-row flex-col justify-between items-center px-5   bg-[#1F074080]  py-8  rounded-md mb-20">
        <p>
          Please email us at{" "}
          <span className="text-primary">hr@UnicornTech.com </span>
          for enquiry
        </p>
        <button className="sm:grow-0 grow bg-[#7F00FF] px-4 py-2 rounded-full md:mt-0 mt-4">
          Let’s Connect
        </button>
      </div>
    </>
  );
};

const Card = ({ card }) => (
  <div className=" bg-[#001118] rounded-3xl px-[10%] text-white lg:space-y-10 md:space-y-8 space-y-5 py-10 flex flex-col items-center">
    <div className="lg:space-y-5 md:space-y-4 space-y-2 flex flex-col items-center h-full">
      {" "}
      <img
        className="md:w-24 md:h-24 w-16 h-16 rounded-full border-2 border-[#0500FF]"
        src={card.Img}
        alt=""
      />
      <p className="lg:text-3xl md:text-2xl text-xl font-bold text-center"> {card.title}</p>
    </div>
    <div className="flex flex-col items-center space-y-2 md:text-lg text-base ">
      <p>
        <span className="text-primary">Experience : </span>
        {card.Experience}
      </p>
      <p>
        <span className="text-primary">Vacant : </span>
        {card.Vacant}
      </p>
    </div>

    <button className="border rounded-lg md:font-bold font-semibold md:px-6 py-1 px-4  ">
      Join Team Now
    </button>
  </div>
);

export default CareerPage;
