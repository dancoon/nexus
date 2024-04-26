import React from "react";
import Image from "next/image";
import Link from "next/link";
import hero from "@/public/hero.png";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div
      className="md:max-w-screen-2xl mx-auto md:px-4 h-screen flex flex-col justify-center items-center"
      id="home"
    >
      <div className="max-w-screen-2xl h-screen absolute">
        <Image
          src={hero}
          alt="Hero Image"
          className="rounded-sm  w-[400px] h-[780px] md:h-screen md:w-[1504px]"
          priority
        ></Image>
      </div>
      <div className="relative text-white w-full text-center">
        <h1 className=" font-bold text-xl md:text-6xl">
          Network for Expert Coders & <br></br>Synergy
        </h1>
        <p className="mt-2 md:mt-6 text-sm  md:text-xl">
          Amplify Your Skills. Amplify Your Network
        </p>
        <div className="mt-6 space-x-4">
          <Button size={"lg"} asChild>
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
          <Button size={"lg"} variant={"secondary"} asChild>
            <Link href="/auth/login">Log In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
