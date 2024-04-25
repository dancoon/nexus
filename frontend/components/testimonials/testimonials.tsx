import React from "react";
import TestimonialCard from "./testimonial-card";
import { Testimonial } from "@/lib/types";

const testimonials: Testimonial[] = [
  {
    rating: 5,
    comment:
      "Nexus has completely transformed the way I connect and collaborate with other developers.",
    user: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 4,
    comment:
      "I've been using Nexus for a few months now and I've never been more satisfied with a product.",
    user: {
      firstname: "Jane",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 5,
    comment:
      "Nexus has completely transformed the way I connect and collaborate with other developers.",
    user: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 4,
    comment:
      "I've been using Nexus for a few months now and I've never been more satisfied with a product.",
    user: {
      firstname: "Jane",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 5,
    comment:
      "Nexus has completely transformed the way I connect and collaborate with other developers.",
    user: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 4,
    comment:
      "I've been using Nexus for a few months now and I've never been more satisfied with a product.",
    user: {
      firstname: "Jane",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 5,
    comment:
      "Nexus has completely transformed the way I connect and collaborate with other developers.",
    user: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 4,
    comment:
      "I've been using Nexus for a few months now and I've never been more satisfied with a product.",
    user: {
      firstname: "Jane",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 5,
    comment:
      "Nexus has completely transformed the way I connect and collaborate with other developers.",
    user: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 4,
    comment:
      "I've been using Nexus for a few months now and I've never been more satisfied with a product.",
    user: {
      firstname: "Jane",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 5,
    comment:
      "Nexus has completely transformed the way I connect and collaborate with other developers.",
    user: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 4,
    comment:
      "I've been using Nexus for a few months now and I've never been more satisfied with a product.",
    user: {
      firstname: "Jane",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 5,
    comment:
      "Nexus has completely transformed the way I connect and collaborate with other developers.",
    user: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 4,
    comment:
      "I've been using Nexus for a few months now and I've never been more satisfied with a product.",
    user: {
      firstname: "Jane",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 5,
    comment:
      "Nexus has completely transformed the way I connect and collaborate with other developers.",
    user: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 4,
    comment:
      "I've been using Nexus for a few months now and I've never been more satisfied with a product.",
    user: {
      firstname: "Jane",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 5,
    comment:
      "Nexus has completely transformed the way I connect and collaborate with other developers.",
    user: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 4,
    comment:
      "I've been using Nexus for a few months now and I've never been more satisfied with a product.",
    user: {
      firstname: "Jane",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 5,
    comment:
      "Nexus has completely transformed the way I connect and collaborate with other developers.",
    user: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
  {
    rating: 4,
    comment:
      "I've been using Nexus for a few months now and I've never been more satisfied with a product.",
    user: {
      firstname: "Jane",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-screen-2xl px-4 py-16 md:py-28 mx-auto mt-14 md:mt-28 text-center justify-center border-t border-black dark:border-slate-400">
      <h3 className="font-bold text-3xl mt-3 md:text-5xl">Testimonials</h3>
      <p className="text-sm mt-5 md:text-lg max-w-[850px] md:text-center mx-auto">
        Take a look at what our satisfied users have to say about their
        experiences with our product and how it has positively impacted their
        lives.
      </p>
      <div className="mt-12 space-y-12 md:grid md:grid-cols-3 md:space-y-0">
        <TestimonialCard testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Testimonials;
