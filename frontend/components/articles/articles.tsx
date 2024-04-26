import React from "react";
import ArticleCard from "./article-card";
import { Article } from "@/lib/types";
import { Button } from "../ui/button";

const articles: Article[] = [
  {
    tag: "Technology",
    imageUrl: "/technology.jpeg",
    title: "Mastering Web Development: Tips and Tricks",
    description:
      "Learn advanced techniques to level up your web development skills.",
    owner: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe1.jpeg",
    },
    datePublished: "2021-01-01",
    minutesToRead: 5,
  },
  {
    tag: "Data",
    imageUrl: "/data.jpeg",
    title: "Exploring Data Science: A Practical Guide",
    description:
      "Discover the world of data science and learn how to apply it in real-world scenarios.",
    owner: {
      firstname: "Jane",
      lastname: "Smith",
      avatarUrl: "/jane.jpeg",
    },

    datePublished: "2021-01-02",
    minutesToRead: 5,
  },
  {
    tag: "Mobile",
    imageUrl: "/mobile.jpeg",
    title: "Building Mobile Apps: Best Practices",
    description:
      "Learn the essential techniques for creating high-quality mobile applications.",
    owner: {
      firstname: "Mark",
      lastname: "Johnson",
      avatarUrl: "/mark.jpeg",
    },
    datePublished: "2021-01-03",
    minutesToRead: 5,
  },
];

const Articles = () => {
  return (
    <div className="max-w-screen-2xl px-4 mx-auto mt-14 md:mt-28 text-center justify-center">
      <h4 className="font-bold text-sm md:text-normal md:text-[18px]">
        Articles
      </h4>
      <h3 className="font-bold text-3xl mt-3 md:text-5xl">
        Discover New Tech Content
      </h3>
      <p className="text-sm mt-5 md:text-lg max-w-[850px] md:text-center mx-auto">
        Stay updated with the latest tech articles, tutorials, and industry news
        to keep yourself informed and ahead of the curve.
      </p>

      <div className="mt-12 space-y-12 md:grid md:grid-cols-3 md:space-y-0">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      <Button size={"lg"} variant={"outline"} className="mt-10">
        View All
      </Button>
    </div>
  );
};

export default Articles;
