import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import connectimage from "../../public/connect.png";

const About = () => {
  return (
    <div
      className="max-w-screen-2xl px-4 mx-auto mt-14 text-left justify-center md:mt-28 flex md:items-center"
      id="about"
    >
      <div className="md:min-h-[540px]">
        <h2 className="text-xl font-bold md:hidden">
          Unlock <br /> Opportunities and <br /> Collaborate with <br />{" "}
          Developers
        </h2>
        <h2 className="text-5xl font-bold hidden md:block">
          Unlock Opportunities and Collaborate with Developers
        </h2>
        <p className="text-sm mt-1 md:text-lg md:mt-6">
          Join Nexus and tap into a vibrant community of developers. Make
          valuable connections, find collaborators for your projects, and access
          a wealth of shared knowledge.
        </p>

        <div className="mt-4 space-y-6 md:mt-8 md:flex md:space-y-0 md:gap-12">
          <div>
            <h4 className="font-bold md:text-2xl">Make Connections</h4>
            <p className="text-sm mt-1 md:text-lg">
              Connect with developers from diverse backgrounds and niches to
              expand your network.
            </p>
          </div>
          <div>
            <h4 className="font-bold md:text-2xl">Find Collaborators</h4>
            <p className="text-sm mt-1 md:text-lg">
              Discover talented developers to collaborate with on your projects
              and ideas.
            </p>
          </div>
        </div>
        <div className="mt-4 space-x-6 md:space-x-10">
          <Button variant={"outline"}>Learn More</Button>
          <Button variant={"ghost"} asChild>
            <Link href="/auth/signup">
              Sign Up <FaChevronRight className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src={connectimage}
          alt="connect"
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default About;
