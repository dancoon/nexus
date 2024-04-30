import React from "react";
import { Skeleton } from "../ui/skeleton";

const SideArticleCardSkeleton = () => {
  return (
    <div className="text-left max-w-[450px] border-b py-2">
      <Skeleton className="w-[180px] h-5" />
      <Skeleton className="w-[300px] h-4 mt-2" />
      <Skeleton className="w-[225px] h-4 mt-2" />
      <div className="mt-1">
        <Skeleton className="w-20 h-4" />
      </div>
    </div>
  );
};

export default SideArticleCardSkeleton;
