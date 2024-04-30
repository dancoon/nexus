import React from "react";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const ArticleItemSkeleton = () => {
  return (
    <div className="max-w-sm md:max-w-screen-lg flex gap-2 border-b py-4 items-center">
      <Skeleton className="w-[100px] h-[100px] " />

      <div className="flex-1">
        <div className="flex items-center justify-between w-full">
          <Skeleton className="w-20 h-4" />
          <Skeleton className="w-10 h-10" />
        </div>
        <Skeleton className="w-[275px] h-6 mt-2" />
        <Skeleton className="w-[650px] h-5 mt-2" />
        <Skeleton className="w-[450px] h-5 mt-2" />

        <div className="flex mt-4 space-x-4">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="flex flex-col space-y-1">
            <Skeleton className="w-20 h-4" />
            <span className="block w-full font-bold text-sm"></span>
            <Skeleton className="w-20 h-4" />
            <span className="block w-full text-sm"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItemSkeleton;
