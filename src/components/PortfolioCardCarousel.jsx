import { motion } from "framer-motion";
import Ecom from "../assets/images/e-com.png";
import webDev from "../assets/images/web-dev.png";
import crm from "../assets/images/crm.png";
import crm2 from "../assets/images/crm2.png";
import { useState } from "react";

const InfiniteScrollingCards = () => {

  const [isPaused, setIsPaused] = useState(false);
  const cardData = [
    {
      image: Ecom,
      title: "E-Commerce",
      desc: "Product Based Website",
      link: "/",
    },
    {
      image: webDev,
      title: "Web Developement",
      desc: "Stock Broker & Finance Solution",
      link: "/",
    },
    {
      image: crm,
      title: "CRM",
      desc: "Trade Website",
      link: "/",
    },
    {
      image: crm2,
      title: "CRM",
      desc: "Trade Website",
      link: "/",
    },
  ];
  return (
    <div className="overflow-hidden w-full  py-10">
      <motion.div
        className="flex gap-6 w-max"
        animate={isPaused? {x:0} : { x: ["0%", "-100%"] }} 
        transition={{
          repeat: isPaused ? 0 : Infinity,
          duration: 20,
          ease: "linear",
        }}
        onHoverStart={() => setIsPaused(true)}
        onHoverEnd={() => setIsPaused(false)}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="md:w-[610px]  w-auto h-auto  rounded-lg  p-3 bg-[#001118]"
          >
            <div className="overflow-hidden w-full h-auto ">
              <img
                className="w-full h-full object-contain"
                src={card.image}
                alt={card.title}
              />
            </div>

            <div className="flex justify-between items-stretch gap-2 mt-6">
              <div className="bg-[#412D55] w-full rounded-lg p-3">
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="text-base font-normal">{card.desc}</p>
              </div>

              <div className="bg-[#412D55] px-14 flex items-center rounded-lg  ">
                <button className="px-2 py-1 bg-[#368DE5] rounded cursor-pointer">
                  Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollingCards;
