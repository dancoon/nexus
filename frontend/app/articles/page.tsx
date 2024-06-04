"use client";

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

import React, { useEffect, useState } from "react";
import SideArticleCard from "@/components/articles/side-article-card";
import SideCard from "@/components/common/sidecard";
import ArticleItemSkeleton from "@/components/articles/article-item-skeleton";
import SideArticleCardSkeleton from "@/components/articles/side-article-card-skeleton";
import { useListArticlesQuery } from "@/redux/features/articlesApiSlice";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { number } from "zod";

const articles: Article[] = [
  {
    topic: 1,
    tags: [],
    slug: "",
    likes: 0,
    comments: 0,
    isPublic: true,
    published: true,
    updatedAt: "",
    cover_image_url: "/data.jpeg",
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
  const router = useRouter();
  const pageNumber = Number(useSearchParams().get("page")) || 1;
  const [pageRange, setPageRange] = useState([1]);
  const {
    data: articles,
    isLoading,
    error,
  } = useListArticlesQuery({ pageNumber });
  const { count, next, previous, results } = articles || {};
  const lastPage = Math.ceil(count! / 12);

  console.log("articles", articles);

  useEffect(() => {
    const totalPages = Math.ceil(count! / 12);
    const initialPageRange: number[] = [];
    for (let i = 1; i <= Math.min(totalPages, 3); i++) {
      initialPageRange.push(i);
    }
    setPageRange(initialPageRange);
  }, [articles?.count]);

  const handlePageChange = (newPageNumber: number) => {
    // setPageNumber(newPageNumber);
    // // Update page range when next or previous is clicked
    // const newRange = [];
    // for (let i = newPageNumber - 1; i <= newPageNumber + 1; i++) {
    //   if (i > 0 && i <= lastPage) {
    //     newRange.push(i);
    //   }
    // }
    // setPageRange(newRange);
    router.push(`/articles?page=${newPageNumber}`);
  };

  if (error) {
    return <div>Error:</div>;
  }

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

            {results?.map((article, index) => (
              <ArticleItem key={index} {...article} />
            ))}

            <Pagination className="mt-12 mb-8 max-w-sm">
              <PaginationPrevious>
                {previous && (
                  <PaginationLink
                    onClick={() => handlePageChange(pageNumber - 1)}
                  >
                    Previous
                  </PaginationLink>
                )}
              </PaginationPrevious>
              <PaginationContent>
                {pageRange.map((page, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink href={`articles?page=${page}`}>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                {pageRange[pageRange.length - 1] < lastPage && (
                  <PaginationEllipsis />
                )}
                {lastPage > pageRange[pageRange.length - 1] && (
                  <PaginationItem key={lastPage + 1}>
                    <PaginationLink onClick={() => handlePageChange(lastPage)}>
                      {lastPage}
                    </PaginationLink>
                  </PaginationItem>
                )}
              </PaginationContent>
              <PaginationNext>
                {next && (
                  <PaginationLink
                    onClick={() => handlePageChange(pageNumber + 1)}
                  >
                    Next
                  </PaginationLink>
                )}
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

            {/* {!isLoading && (
              <div>
                {articles.slice(0, 3).map((article, index) => (
                  <SideArticleCard key={index} {...article} />
                ))}
              </div>
            )} */}
          </SideCard>
        </div>
      </div>
    </Wrapper>
  );
}
