import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { FaFacebook, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import bulbIdeaImg from "../assets/images/bulbIdeaImg.png";
import ReadyToWork from "../components/ReadyToWork";
import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Number: "",
    Message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      newFormData.append(key, value);
    });

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxPx_Pj1SUIqIigzanFy_AUCduGFrAKGNt8G7zAvdMk0UVyo_t1mVGgdI1qjTdrjwjE/exec",
        {
          method: "POST",
          body: newFormData,
        }
      );

      if (response.ok) {
        alert("data submitted successfully!");
      }
    } catch (error) {
      console.log("error in submit the data", error);
    }
  };

  return (
    <div className="">
      {/* hero section */}
      <section className=" w-full md:h-screen h-96 flex justify-start items-center text-white bg-center bg-cover bg-no-repeat bg-[url(./assets/images/ContactUsHero.png)]">
        <div className=" relative md:px-20 px-5 md:w-[40%] w-full">
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold md:tracking-widest md:leading-16 leading-10">
            Stay <span className="text-primary">Connected</span> With Us
          </h2>
          <div className=" md:block hidden  absolute w-28 h-1 bg-primary bottom-6 left-[300px]"></div>
        </div>
      </section>
      {/* card section */}
      <section className="  flex flex-wrap justify-center w-[90%] mx-auto text-white bg-[#0B0A72]/20 backdrop-blur-lg rounded-[20px] py-10 gap-10 px-10">
        <div className="flex flex-col items-center gap-y-5 bg-[#002244] p-5 rounded-2xl flex-1 min-w-[200px] md:min-h-[250px]">
          <MdCall className="lg:text-5xl md:text-4xl text-3xl" />
          <p className="font-bold lg:text-3xl md:text-2xl text-xl">Phone</p>
          <div>
            <a href="tel:+919589572990" className="block hover:underline">
              +91-958-957-2990 </a>
            <a href="tel:+919630088808" className="block hover:underline">
              +91-963-008-8808
            </a>
          </div>
        </div>
        <div className="   flex flex-col items-center gap-y-5 bg-[#002244] p-5 rounded-2xl flex-1 min-w-[200px] md:min-h-[250px]">
          <FaLocationDot className="lg:text-5xl md:text-4xl text-3xl " />
          <p className="font-bold lg:text-3xl md:text-2xl text-xl">Address</p>
          <div>
            <a href="https://www.google.com/maps/place/Lig+Square,+Indore,+Madhya+Pradesh/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <p>Lig square,Indore, [M.P.]India</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-5 bg-[#002244] p-5 rounded-2xl flex-1 min-w-[200px] md:min-h-[250px]">
          <MdEmail className="lg:text-5xl md:text-4xl text-3xl" />
          <p className="lg:text-3xl md:text-2xl text-xl font-bold">E-mail</p>
          <a href="mailto:Itsunicorntech@gmail.com" className="hover:underline">
            <p>Itsunicorntech@gmail.com</p>
          </a>
        </div>
        <div className="flex flex-col items-center gap-y-5 bg-[#002244] p-5 rounded-2xl flex-1 min-w-[200px] md:min-h-[250px]">
          <BsPeopleFill className="lg:text-5xl md:text-4xl text-3xl" />
          <p className="lg:text-3xl md:text-2xl text-xl font-bold">Follow us</p>
          <div className="flex gap-2 items-center lg:text-4xl text-3xl text-primary">

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
      </section>

      {/* form section */}
      <section
        className="grid  lg:grid-cols-2 gird-cols-1 mt-20 md:px-20 px-5 w-full space-y-10
       "
      >
        <div className="h-fit">
          <img
            src={bulbIdeaImg}
            alt=""
            className="lg:w-[617px] w-auto lg:h-[550px] h-auto object-contain"
          />
        </div>
        <div className=" lg:w-4/5 w-full h-fit  mx-auto  lg:ml-28 bg-[#00070D80]/50 p-6 rounded-[20px] backdrop-blur-lg   border border-[#7C3AED] ">
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="flex space-x-8">
              <input
                type="text"
                name="Firstname"
                onChange={handleChange}
                value={formData.Firstname}
                required
                placeholder="First Name"
                className="w-1/2 bg-transparent border-b border-[#7C3AED] text-white outline-none p-2"
              />
              <input
                type="text"
                name="Lastname"
                required
                onChange={handleChange}
                value={formData.Lastname}
                placeholder="Last Name"
                className="w-1/2 bg-transparent border-b border-[#7C3AED] text-white outline-none p-2"
              />
            </div>
            <input
              type="email"
              name="Email"
              onChange={handleChange}
              value={formData.Email}
              required
              placeholder="E-mail"
              className="w-full bg-transparent border-b border-[#7C3AED] text-white outline-none p-2"
            />
            <input
              type="tel"
              name="Number"
              onChange={handleChange}
              value={formData.Number}
              required
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-[#7C3AED] text-white outline-none p-2"
            />
            <textarea
              placeholder="Message"
              name="Message"
              onChange={handleChange}
              value={formData.Message}
              required
              className="w-full bg-transparent border-b border-[#7C3AED] text-white outline-none p-2 h-20"
            />
            <button
              type="submit"
              className="w-full bg-transparent border border-primary text-primary p-2 rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out cursor-pointer text-base font-medium mt-24  "
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
      <ReadyToWork />
    </div>
  );
};

export default ContactUsPage;
