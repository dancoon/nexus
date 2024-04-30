import React from "react";
import { Skeleton } from "../ui/skeleton";

const ArticleCardSkeleton = () => {
  return (
    <div className="text-left max-w-[450px]">
      <Skeleton className="mb-6 h-[250px] w-full" />
      <Skeleton className="h-5 w-[120px]" />
      <Skeleton className="h-6 w-[275px] mt-2" />
      <Skeleton className="h-6 w-[420px] mt-2" />
      <Skeleton className="h-6 w-[200px] mt-2" />

      <div className="flex mt-6 space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default ArticleCardSkeleton;
