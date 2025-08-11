import { useState } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

import analytics from "../assets/images/servicesImages/icons/crm/analytics.svg";
import automation from "../assets/images/servicesImages/icons/crm/automation.svg";
import customization from "../assets/images/servicesImages/icons/crm/customization.svg";
import integration from "../assets/images/servicesImages/icons/crm/integration.svg";
import mobile from "../assets/images/servicesImages/icons/crm/mobile.svg";
import multiChannel from "../assets/images/servicesImages/icons/crm/multiChannel.svg";
import pricing from "../assets/images/servicesImages/icons/crm/pricing.svg";
import scalability from "../assets/images/servicesImages/icons/crm/scalability.svg";
import security from "../assets/images/servicesImages/icons/crm/security.svg";
import ease from "../assets/images/servicesImages/icons/crm/ease.svg";
import speed from "../assets/images/servicesImages/icons/crm/speed.svg";
import seo from "../assets/images/servicesImages/icons/crm/seo.svg";

const tabs = [
  { id: "crm", label: "CRM" },
  { id: "web-dev", label: "Web Development" },
];

const data = {
  crm: [
    {
      title: "Scalability",
      icon: scalability,
      description:
        "The CRM should grow with your business, accommodating more users, data, and advanced features.",
    },
    {
      title: "Automation",
      icon: automation,
      description:
        "Automate repetitive tasks like follow-ups, data entry, and marketing campaigns.",
    },
    {
      title: "Analytics and Reporting",
      icon: analytics,
      description:
        "Automate repetitive tasks like follow-ups, data entry, and marketing campaigns.",
    },
    {
      title: "Customization",
      icon: customization,
      description:
        "Tailored workflows, fields, and dashboards to match your business needs.",
    },
    {
      title: "Integration",
      icon: integration,
      description:
        "Seamless integration with tools you already use (email, marketing platforms, ERP, etc.).",
    },
    {
      title: "Mobile Accessibility",
      icon: mobile,
      description: "For on-the-go access by your sales and support teams.",
    },
    {
      title: "Support for Multichannel Communication",
      icon: multiChannel,
      description: "Email, social media, phone, and chat integrations.",
    },
    {
      title: "Affordable Pricing",
      icon: pricing,
      description:
        "Choose a solution that fits your budget and offers transparent pricing.",
    },
  ],
  "web-dev": [
    {
      title: "Scalability",
      icon: scalability,

      description:
        "Ensure the solution can handle growing traffic and accommodate additional features.",
    },
    {
      title: "Speed and Performance:",
      icon: speed,

      description:
        "Automate repetitive tasks like follow-ups, data entry, and marketing campaigns.",
    },
    {
      title: "SEO Optimization",
      icon: seo,
      description: "Built-in tools to optimize your site for search engines.",
    },
    {
      title: "Ease of Use",
      icon: ease,
      description:
        "Intuitive interface for creating and managing pages, even without coding expertise.",
    },
    {
      title: "Customization",
      icon: customization,
      description:
        "Flexibility to design and modify layouts to suit your brand.",
    },
    {
      title: "Integration",
      icon: integration,
      description:
        "Ability to integrate with marketing tools, analytics, and e-commerce platforms.",
    },

    {
      title: "Security",
      icon: security,
      description:
        "Static sites are inherently secure, but ensure the solution supports HTTPS and regular updates.",
    },
    {
      title: "Cost-Effectiveness",
      icon: pricing,
      description:
        "Choose a platform that offers value for your investment with transparent pricing.",
    },
  ],
};

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("crm");

  return (
    <div className=" text-white py-12 px-6 md:px-16">
      {/* Tab Switching */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center p-4 space-x-4 rounded-lg mb-8 bg-[#002D40] w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-2 py-1 rounded-lg  md:text-lg text-base cursor-pointer font-semibold transition ${
                activeTab === tab.id ? "bg-[#368DE5] text-white" : " "
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "crm" && (
          <>
            <p className="text-center max-w-3xl mx-auto mb-8 md:text-base text-sm">
              A CRM (Customer Relationship Management) solution can be a
              game-changer for managing business expansion, as it helps
              streamline customer interactions, sales processes, and overall
              operational efficiency. Here are some considerations and
              recommended CRM solutions to support your growing business:
            </p>
            <p className="text-start font-medium mb-2 md:text-base text-sm">
              Key Features to Look for in a CRM for Business Expansion:
            </p>
          </>
        )}

        {activeTab === "web-dev" && (
          <>
            <p className="text-center max-w-3xl mx-auto mb-8 md:text-base text-sm">
              Web development involves creating, building, and maintaining
              websites or web applications accessible via the internet. It
              includes front-end design using HTML, CSS, and JavaScript, and
              back-end development with server-side logic and databases. Web
              developers ensure seamless user experiences, responsiveness, and
              performance optimization.
            </p>

            <p className="text-start font-medium mb-2 md:text-base text-sm">
              Key Features to Look for in a Static Website Solution for Business
              Expansion
            </p>
          </>
        )}

        {/* Grid Layout for Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data[activeTab].map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-tl from-[#001118]/40 to-[#368DE5]/40 p-px rounded-lg"
            >
              <div className="bg-[#001118] h-full p-4 rounded-lg shadow-md  transition">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="md::w-[70px] md:h-[65px] w-[40px] h-[40px] object-contain"
                />
                <h3 className="lg:text-2xl md:text-xl text-lg font-bold mb-2 sm:mt-5 mt-3">
                  {feature.title}:
                </h3>
                <p className="text-sm md:font-normal font-light ">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesSection;
