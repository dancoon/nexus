import React from "react";
import Link from "next/link";
import { Article } from "@/lib/types";
import ArticleCardSkeleton from "./article-card-skeleton";
import ArticleCard from "./article-card";
import { Button } from "../ui/button";

const articles: Article[] = [
  {
    tags: [],
    slug: "",
    likes: 0,
    comments: 0,
    public: true,
    published: true,
    updatedAt: "2021-01-01",
    topic: "Technology",
    coverImageUrl: "/technology.jpeg",
    title: "Mastering Web Development: Tips and Tricks",
    content:
      "Learn advanced techniques to level up your web development skills.",
    author: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe1.jpeg",
    },
    datePublished: "2021-01-01",
    minutesToRead: 5,
  },
  {
    tags: [],
    slug: "",
    likes: 0,
    comments: 0,
    public: true,
    published: true,
    updatedAt: "2021-01-01",
    topic: "Data",
    coverImageUrl: "/data.jpeg",
    title: "Exploring Data Science: A Practical Guide",
    content:
      "Discover the world of data science and learn how to apply it in real-world scenarios.",
    author: {
      firstname: "Jane",
      lastname: "Smith",
      avatarUrl: "/jane.jpeg",
    },

    datePublished: "2021-01-02",
    minutesToRead: 5,
  },
  {
    tags: [],
    slug: "",
    likes: 0,
    comments: 0,
    public: true,
    published: true,
    updatedAt: "2021-01-01",
    topic: "Mobile",
    coverImageUrl: "/mobile.jpeg",
    title: "Building Mobile Apps: Best Practices",
    content:
      "Learn the essential techniques for creating high-quality mobile applications.",
    author: {
      firstname: "Mark",
      lastname: "Johnson",
      avatarUrl: "/mark.jpeg",
    },
    datePublished: "2021-01-03",
    minutesToRead: 5,
  },
];

const Articles = () => {
  const isLoading = false;

  return (
    <div
      className="max-w-screen-2xl px-4 mx-auto mt-14 md:mt-28 text-center justify-center"
      id="articles"
    >
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

      {isLoading && (
        <div className="mt-12 space-y-12 md:grid md:grid-cols-3 md:space-y-0">
          {Array.from({ length: 3 }).map((_, index) => (
            <ArticleCardSkeleton key={index} />
          ))}
        </div>
      )}

      <div className="mt-12 space-y-12 md:grid md:grid-cols-3 md:space-y-0">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      <Button size={"lg"} variant={"outline"} className="mt-10" asChild>
        <Link href="/articles"> View All</Link>
      </Button>
    </div>
  );
};

export default Articles;
