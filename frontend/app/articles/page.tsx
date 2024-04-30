import ArticleItem from "@/components/articles/article-item";
import Wrapper from "@/components/common/wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Article } from "@/lib/types";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import React from "react";
import SideArticleCard from "@/components/articles/side-article-card";
import SideCard from "@/components/common/sidecard";
import ArticleItemSkeleton from "@/components/articles/article-item-skeleton";
import SideArticleCardSkeleton from "@/components/articles/side-article-card-skeleton";

const articles: Article[] = [
  {
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Mobile",
    tags: [],
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
  {
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Mobile",
    tags: [],
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
  {
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Mobile",
    tags: [],
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
  {
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Mobile",
    tags: [],
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
  {
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Mobile",
    tags: [],
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
  {
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
    topic: "Technology",
    tags: [],
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
    topic: "Data",
    tags: [],
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
];

const topics = [
  "Technology",
  "Mobile",
  "Data",
  "Technology",
  "Data",
  "Mobile",
  "Technology",
  "Data",
  "Mobile",
];

export default function Home() {
  const isLoading = false;

  return (
    <Wrapper title="articles">
      <div className="block space-y-14 md:flex md:space-y-0">
        {isLoading && (
          <div className="max-w-sm md:flex-1 md:max-w-screen-lg md:px-12 md:h-[850px]">
            {Array.from({ length: 12 }).map((_, index) => (
              <ArticleItemSkeleton key={index} />
            ))}
          </div>
        )}

        {!isLoading && (
          <ScrollArea className="max-w-sm md:flex-1 md:max-w-screen-lg md:px-12 md:h-[850px]">
            {/* <ul className="flex max-w-[250px]">
            {topics.map((item, index) => (
              <li key={index} className="mr-4">
                <Card>
                  <CardContent>{item}</CardContent>
                </Card>
              </li>
            ))}
          </ul> */}

            {articles.slice(0, 12).map((article, index) => (
              <ArticleItem key={index} {...article} />
            ))}
            <Pagination className="mt-12 max-w-sm">
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
        )}
        <div className="px-1 mx-auto">
          <SideCard
            heading="Popular Articles"
            description="Explore the Buzz: Dive into Popular Reads!"
          >
            {isLoading && (
              <div>
                {Array.from({ length: 3 }).map((_, index) => (
                  <SideArticleCardSkeleton key={index} />
                ))}
              </div>
            )}

            {!isLoading && (
              <div>
                {articles.slice(0, 3).map((article, index) => (
                  <SideArticleCard key={index} {...article} />
                ))}
              </div>
            )}
          </SideCard>
        </div>
      </div>
    </Wrapper>
  );
}
