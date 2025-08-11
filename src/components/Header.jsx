import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
import unicornLogo from "../assets/unicornLogo.svg";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import CompanyDropdown from "./CompanyDropdown";
import ServicesDropdown from "./ServicesDropdown";
import { motion, AnimatePresence } from "framer-motion";
 
const ForwardedCompanyDropdown = React.forwardRef((props, ref) => (
  <CompanyDropdown {...props} ref={ref} />
));

const ForwardedServicesDropdown = React.forwardRef((props, ref) => (
  <ServicesDropdown {...props} ref={ref} />
));

const Header = () => {
  const [servicesDD, setServicesDD] = useState(false);
  const [servicesDDMobile, setServicesDDMobile] = useState(false);
  const [servicesDDMobileOptionOne, setServicesDDMobileOptionOne] =
    useState(false);
  const [servicesDDMobileOptionTwo, setServicesDDMobileOptionTwo] =
    useState(false);
  const [servicesDDMobileOptionThree, setServicesDDMobileOptionThree] =
    useState(false);
  const [companyDD, setCompanyDD] = useState(false);
  const [companyDDMobile, setCompanyDDMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const companyRef = useRef(null); // Ref for CompanyDropdown
  const servicesRef = useRef(null); // Ref for ServicesDropdown

  const handleCompanyDD = () => {
    setCompanyDD(!companyDD);
    setServicesDD(false);
  };

  const handleServicesDD = () => {
    setServicesDD(!servicesDD);
    setCompanyDD(false);
  };

  const handleServicesDDMobile = () => {
    setServicesDDMobile(!servicesDDMobile);
    setCompanyDDMobile(false);
  };

  const handleCompanyDDMobile = () => {
    setCompanyDDMobile(!companyDDMobile);
    setServicesDDMobile(false);
  };

  const handleOutsideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  const handleServicesDDOptionOne = () => {
    setServicesDDMobileOptionOne(!servicesDDMobileOptionOne);
    setServicesDDMobileOptionTwo(false);
    setServicesDDMobileOptionThree(false);
  };

  const handleServicesDDOptionTwo = () => {
    setServicesDDMobileOptionTwo(!servicesDDMobileOptionTwo);
    setServicesDDMobileOptionOne(false);
    setServicesDDMobileOptionThree(false);
  };

  const handleServicesDDOptionThree = () => {
    setServicesDDMobileOptionThree(!servicesDDMobileOptionThree);
    setServicesDDMobileOptionOne(false);
    setServicesDDMobileOptionTwo(false);
  };

  // Handle outside clicks for Company and Services dropdowns (similar to your provided Header)
  useEffect(() => {
    const closeDropdowns = (e) => {
      if (
        !e.target.closest("#company-dd-toggle") &&
        !e.target.closest("#company-dropdown")
      ) {
        setCompanyDD(false);
      }
      if (
        !e.target.closest("#services-dd-toggle") &&
        !e.target.closest("#services-dropdown")
      ) {
        setServicesDD(false);
      }
    };

    document.addEventListener("click", closeDropdowns);
    return () => {
      document.removeEventListener("click", closeDropdowns);
    };
  }, []); // Empty dependency array ensures it runs once on mount/unmount

  const sidebarVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.2 } },
  };

  const dropdownVariants = {
    hidden: { height: 0, opacity: 0, transition: { duration: 0.2 } },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.2 } },
  };

  // Navigation link styling
  const navLinkStyles = ({ isActive }) =>
    `cursor-pointer hover:text-[#368DE5] transition-all duration-300 ${
      isActive ? "text-[#368DE5] font-semibold" : ""
    }`;

  return (
    <header className="container mx-auto absolute top-0 left-1/2 -translate-x-1/2  z-20  flex justify-between items-center text-white px-4 py-4 lg:px-10">
      {/* Logo */}
      <Link to={'/'}>
        <div>
          <img src={unicornLogo} alt="logo" />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="bg-[#101929] text-white px-[26px] py-[13px] rounded-[50px] hidden lg:block">
        <ul className="flex gap-5 text-base font-normal">
          <li>
            <NavLink to="/" className={navLinkStyles} id="home-link">
              Home
            </NavLink>
          </li>
          <li
            id="company-dd-toggle"
            onClick={handleCompanyDD}
            className="cursor-pointer hover:text-[#368DE5] transition-all duration-300 flex items-center"
          >
            Company <RiArrowDropDownLine />
          </li>
          <li
            id="services-dd-toggle"
            onClick={handleServicesDD}
            className="cursor-pointer hover:text-[#368DE5] transition-all duration-300 flex items-center"
          >
            Services <RiArrowDropDownLine />
          </li>
          <li>
            <NavLink to="/portfolio" className={navLinkStyles}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkStyles}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkStyles}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden z-30"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Transparent Overlay */}
            <motion.div
              className="fixed inset-0 bg-transparent lg:hidden z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleOutsideClick}
            />

            {/* Sidebar */}
            <motion.div
              ref={sidebarRef}
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              //className="fixed right-0 top-0 h-full w-3/4 max-w-xs bg-[#101929]/90 backdrop-blur-md text-white p-6 lg:hidden z-20 overflow-y-auto"
              className="fixed right-0 top-0 h-full w-[64vw] bg-[#101929]/80 backdrop-blur-md text-white p-6 lg:hidden z-20"
            >
              <nav className="mt-16 bg-[#101929]/80  backdrop-blur-md ">
                <ul className="flex flex-col gap-6 text-base font-normal">
                  <li>
                    <NavLink
                      to="/"
                      className={navLinkStyles}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="cursor-pointer">
                    <div
                      onClick={handleCompanyDDMobile}
                      className="hover:text-[#368DE5] transition-all duration-300 flex items-center justify-between"
                    >
                      Company <RiArrowDropDownLine />
                    </div>
                    <AnimatePresence>
                      {companyDDMobile && (
                        <motion.ul
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="ml-4 mt-2 flex flex-col gap-2 overflow-hidden"
                        >
                          <li>
                            <NavLink
                              to="/career"
                              className={navLinkStyles}
                              onClick={() => setIsSidebarOpen(false)}
                            >
                              Career
                            </NavLink>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  <li className="cursor-pointer">
                    <div
                      onClick={handleServicesDDMobile}
                      className="hover:text-[#368DE5] transition-all duration-300 flex items-center justify-between"
                    >
                      Services <RiArrowDropDownLine />
                    </div>
                    <AnimatePresence>
                      {servicesDDMobile && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="ml-4 mt-2 flex flex-col gap-2 overflow-hidden"
                        >
                          <h2
                            className="flex gap-1 items-center cursor-pointer hover:text-[#368DE5] transition-all duration-300"
                            onClick={handleServicesDDOptionOne}
                          >
                            Services <RiArrowDropDownLine />
                          </h2>
                          <AnimatePresence>
                            {servicesDDMobileOptionOne && (
                              <motion.ul
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="ml-4 mt-2 flex flex-col gap-2 overflow-hidden pointer-events-auto z-20"
                              >
                                <li><Link to={"/services?tab=1#services"}>IT Management Services</Link></li>
                                <li><Link to={"/services?tab=1#services"}>Data Tracking Security</Link></li>
                                <li><Link to={"/services?tab=1#services"}>Website Development</Link></li>
                                <li><Link to={"/services?tab=1#services"}>CRM Solutions And Design</Link></li>
                                <li><Link to={"/services?tab=1#services"}>UI/UX Design Services</Link></li>
                                <li><Link to={"/services?tab=1#services"}>Technology Solution</Link></li>
                                <li><Link to={"/services?tab=1#services"}>Software Development</Link></li>
                                <li><Link to={"/services?tab=1#services"}>Graphic Design</Link></li>
                              </motion.ul>
                            )}
                          </AnimatePresence>
                          <h2
                            className="flex gap-1 items-center cursor-pointer hover:text-[#368DE5] transition-all duration-300"
                            onClick={handleServicesDDOptionTwo}
                          >
                            Our Fields <RiArrowDropDownLine />
                          </h2>
                          <AnimatePresence>
                            {servicesDDMobileOptionTwo && (
                              <motion.ul
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="ml-4 mt-2 flex flex-col gap-2 overflow-hidden pointer-events-auto"
                              >
                                <li>Healthcare</li>
                                <li>Banks</li>
                                <li>Logistics</li>
                                <li>Supermarkets</li>
                                <li>Industries</li>
                                <li>Hostels</li>
                                <li>Fintech</li>
                              </motion.ul>
                            )}
                          </AnimatePresence>
                          <h2
                            className="flex gap-1 items-center cursor-pointer hover:text-[#368DE5] transition-all duration-300"
                            onClick={handleServicesDDOptionThree}
                          >
                            Mostly Used <RiArrowDropDownLine />
                          </h2>
                          <AnimatePresence>
                            {servicesDDMobileOptionThree && (
                              <motion.ul
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="ml-4 mt-2 flex flex-col gap-2 overflow-hidden"
                              >
                                <li>React JS</li>
                                <li>Node JS</li>
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>Figma</li>
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                  <li>
                    <NavLink
                      to="/portfolio"
                      className={navLinkStyles}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      Portfolio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={navLinkStyles}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={navLinkStyles}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {companyDD && (
        <ForwardedCompanyDropdown ref={companyRef} id="company-dropdown" />
      )}
      {servicesDD && (
        <ForwardedServicesDropdown ref={servicesRef} id="services-dropdown" />
      )}

      {/* Buttons */}
      <div className="hidden lg:block">
        <Link to="/contact">
            <button className="py-[10px] px-[20px] border border-[#368DE5] rounded-lg text-[#368DE5] text-[16px]  cursor-pointer hover:bg-gradient-to-r hover:from-[#368DE5] hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out ">
              Get an Estimated
            </button>
          </Link>
        
      </div>
    </header>
  );
};

export default Header;
