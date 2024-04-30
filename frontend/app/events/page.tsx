import Wrapper from "@/components/common/wrapper";
import EventCard from "@/components/events/event-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { Event } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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

export default function Home() {
  return (
    <Wrapper title="events">
      <ul className="flex max-w-[250px]">
        {events.map((item, index) => (
          <li key={index} className="mr-4">
            <Card>
              <CardContent>{item.title}</CardContent>
            </Card>
          </li>
        ))}
      </ul>
      <ScrollArea className="h-[740px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {events.slice(0, 12).map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        <Pagination className="mt-12 max-w-sm mb-4">
          <PaginationPrevious>
            <PaginationLink href="#">Previous</PaginationLink>
          </PaginationPrevious>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationEllipsis />
            <PaginationItem>
              <PaginationLink href="#">12</PaginationLink>
            </PaginationItem>
          </PaginationContent>
          <PaginationNext>
            <PaginationLink href="#">Next</PaginationLink>
          </PaginationNext>
        </Pagination>
      </ScrollArea>
    </Wrapper>
  );
}
