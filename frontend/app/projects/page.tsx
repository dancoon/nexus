import ArticleItemSkeleton from "@/components/articles/article-item-skeleton";
import SideArticleCard from "@/components/articles/side-article-card";
import SideArticleCardSkeleton from "@/components/articles/side-article-card-skeleton";
import SideCard from "@/components/common/sidecard";
import Wrapper from "@/components/common/wrapper";
import ProjectItem from "@/components/projects/project-item";
import ProjectItemSkeleton from "@/components/projects/project-item-skeleton";
import SideProjectCard from "@/components/projects/side-project-card";
import SideProjectCardSkeleton from "@/components/projects/side-project-card-skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Project } from "@/lib/types";
import React from "react";

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description for Project 1",
    repoLink: "https://github.com",
    user: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe1.jpeg",
    },
    topics: ["topic1", "topic2", "topic3"],
  },
  {
    title: "Project 2",
    description: "Description for Project 2",
    repoLink: "https://github.com",
    user: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
    topics: ["topic1", "topic2", "topic3"],
  },
  {
    title: "Project 3",
    description: "Description for Project 3",
    repoLink: "https://github.com",
    user: {
      firstname: "John",
      lastname: "Doe",
      avatarUrl: "/doe.jpeg",
    },
    topics: ["topic1", "topic2", "topic3"],
  },
];

export default function Home() {
  const isLoading = false;

  return (
    <Wrapper title="projects">
      <div className="block space-y-14 md:flex md:space-y-0">
        {isLoading && (
          <div className="max-w-sm md:flex-1 md:max-w-screen-lg md:px-12 md:h-[850px]">
            {Array.from({ length: 12 }).map((_, index) => (
              <ProjectItemSkeleton key={index} />
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

            {projects.slice(0, 12).map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
            <Pagination className="mt-12 max-w-xs md:mb-4">
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
            heading="Popular Projects"
            description="Explore the Buzz: Dive into Popular Projects!"
          >
            {isLoading && (
              <div>
                {Array.from({ length: 3 }).map((_, index) => (
                  <SideProjectCardSkeleton key={index} />
                ))}
              </div>
            )}

            {!isLoading && (
              <div>
                {projects.slice(0, 3).map((project, index) => (
                  <SideProjectCard key={index} {...project} />
                ))}
              </div>
            )}
          </SideCard>
        </div>
      </div>
    </Wrapper>
  );
}
