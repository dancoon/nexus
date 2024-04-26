import React from "react";
import Image from "next/image";
import { Event } from "@/lib/types";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

const EventCard: React.FC<Event> = ({
  tag,
  imageUrl,
  title,
  description,
  date,
  location,
  link,
}) => {
  return (
    <div className="text-left max-w-[450px] border border-black rounded-sm dark:border-white">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          width={450}
          height={350}
          className="mb-6"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <span className="font-bold text-sm absolute bg-slate-200 p-1 px-2 top-4 right-4 rounded dark:bg-black dark:text-white3">
          {tag}
        </span>
      </div>
      <div className="px-6 pb-6">
        <div className="flex space-x-4">
          <div className="flex space-x-2 items-center">
            <SlCalender />
            <span>{date}</span>
          </div>
          <div className="flex space-x-2 items-center">
            <IoLocationOutline /> <span>{location}</span>
          </div>
        </div>
        <h4 className="font-bold mt-2 text-lg">{title}</h4>
        <p className="mt-2">{description}</p>
        <Link href={link} className="flex items-center mt-4">
          <span>View Event </span>
          <FaChevronRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
