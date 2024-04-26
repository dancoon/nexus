import React from "react";
import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa6";

const Statistics = () => {
  return (
    <div className="bg-statistics min-h-[640px] mt-14 text-white px-8 py-14 md:p-16 max-w-screen-2xl mx-auto rounded-sm">
      <h4 className="text-sm md:hidden">Connecting Developers Worldwide</h4>
      <h3 className="mt-2 text-3xl font-bold md:hidden">
        Join the Nexus <br /> Community and <br /> Grow Together
      </h3>
      <div className="flex flex-col md:grid  md:grid-cols-2 md:gap-16 md:mt-3 items-center">
        <div className="hidden md:block md:flex-grow">
          <h4 className="text-sm block">Connecting Developers Worldwide</h4>
          <h3 className="text-5xl font-bold mt-3">
            Join the Nexus Community and Grow Together
          </h3>
        </div>
        <div className="md:flex-grow md:py-10">
          <p className="mt-2 text-sm font-light md:text-lg">
            Join the Nexus community and experience the power of collaboration.
            With our intelligent matching system, you can connect with
            developers who share your skills and interests. Engage in vibrant
            discussions, collaborate on projects, and share your knowledge
            through blog posts and tutorials. Together, we can revolutionize the
            tech industry.
          </p>
          <div className="mt-6 flex space-x-6">
            <Button
              variant={"outline"}
              className="bg-white bg-opacity-0 border border-white rounded-sm dark:text-white"
            >
              Learn More
            </Button>
            <Button variant={"ghost"}>
              Sign Up <FaChevronRight className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row md:space-y-0 md:justify-between">
        <div className=" border-l-4 pl-4 md:py-6 dark:border-white">
          <span className="font-bold text-3xl md:text-5xl">30%</span>
          <p className="font-sm md:font-lg md:mt-3">
            Developers Connected and Growing
          </p>
        </div>
        <div className="mt-6 border-l-4 pl-4 md:py-6 dark:border-white">
          <span className="font-bold text-3xl md:text-5xl">30%</span>
          <p className="font-sm md:font-lg md:mt-3">Projects Collaborated On</p>
        </div>
        <div className="mt-6 border-l-4 pl-4 md:py-6 dark:border-white">
          <span className="font-bold text-3xl md:text-5xl">30%</span>
          <p className="font-sm md:font-lg md:mt-3">
            Community Members Engaged
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
