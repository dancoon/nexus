import React from "react";
import { FaArrowsUpDownLeftRight } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import FeatureCard from "./feature-card";

const features = [
  {
    title: "Intelligent Matching",
    description: "Connect with developers based on shared skills and interests",
    icon: <FaArrowsUpDownLeftRight className="text-xl md:text-5xl" />,
    linkHref: "#",
    linkString: "Join",
  },
  {
    title: "Discussion Forums",
    description: "Engage in Q&A, knowledge sharing, and discussions",
    icon: <FaLaptopCode className="text-xl md:text-5xl" />,
    linkHref: "#",
    linkString: "Explore",
  },
  {
    title: "Real-Time Chat",
    description: "Communicate directly with developers in real-time",
    icon: <FiMessageCircle className="text-xl md:text-5xl" />,
    linkHref: "#",
    linkString: "Get Started",
  },
];

const Feature = () => {
  return (
    <div className="max-w-screen-2xl px-4 mx-auto mt-14 md:mt-28 text-center justify-center" id="features">
      <div>
        <h2 className="text-xl font-bold md:text-5xl">
          Connecting Developers, <br /> Empowering Collaboration
        </h2>
        <p className=" text-xs mt-1 md:mt-6 md:text-lg">
          Discover, Connect, and Collaborate with Developers Worldwide
        </p>
      </div>

      <div className="mt-8 md:mt-20 flex flex-col space-y-6 md:space-y-0 md:grid grid-cols-3 md:gap-8">
        {features.map(
          ({ title, description, linkHref, linkString, icon }, index) => (
            <FeatureCard
              key={index}
              title={title}
              description={description}
              linkString={linkString}
              linkHref={linkHref}
              icon={icon}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Feature;
