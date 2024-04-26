import React from "react";
import Link from "next/link";
import { Event } from "@/lib/types";
import EventCard from "./event-card";
import { Button } from "../ui/button";

const events: Event[] = [
  {
    tag: "Conference",
    imageUrl: "/conference.jpeg",
    title: "Tech Conference 2024",
    description:
      "Join industry experts and explore the latest trends in technology.",
    date: "2021-01-01",
    location: "Nairobi, Kenya",
    link: "/conference",
  },
  {
    tag: "Workshop",
    imageUrl: "/workshop.jpeg",
    title: "Web Development Workshop",
    description:
      "Learn new web development techniques and enhance your skills.",
    date: "2021-01-02",
    location: "Nairobi, Kenya",
    link: "/workshop",
  },
  {
    tag: "Meetup",
    imageUrl: "/meetup.jpeg",
    title: "Tech Meetup 2024",
    description:
      "Connect with like-minded professionals and expand your network.",
    date: "2021-01-03",
    location: "Nairobi, Kenya",
    link: "/meetup",
  },
];

const Events = () => {
  return (
    <div
      className="max-w-screen-2xl px-4 py-16 md:pt-28 mx-auto mt-14 md:mt-28 text-center justify-center border-t border-black dark:border-slate-400"
      id="events"
    >
      <h4 className="font-bold text-sm md:text-normal md:text-[18px]">
        Discover
      </h4>
      <h3 className="font-bold text-3xl mt-3 md:text-5xl">Upcoming Events</h3>
      <p className="text-sm mt-5 md:text-lg max-w-[850px] md:text-center mx-auto">
        Stay updated with nearby tech events and discover opportunities to
        network, learn, and stay connected in the evolving world of technology.
      </p>

      <div className="mt-12 space-y-12 md:grid md:grid-cols-3 md:space-y-0">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
      <Button size={"lg"} variant={"outline"} className="mt-10" asChild>
        <Link href="/events">View All</Link>
      </Button>
    </div>
  );
};

export default Events;
