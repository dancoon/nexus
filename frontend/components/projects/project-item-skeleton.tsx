import React from "react";
import { Skeleton } from "../ui/skeleton";

const ProjectItemSkeleton = () => {
  return (
    <div className="max-w-sm md:max-w-screen-lg flex gap-2 border-b py-4 items-center">
      <div className="flex-1">
        <div className="flex items-center justify-between w-full">
          <Skeleton className="w-[275px] h-6 mt-2" />
          <Skeleton className="w-10 h-10" />
        </div>
        <Skeleton className="w-[650px] h-5 mt-2" />
        <Skeleton className="w-[450px] h-5 mt-2" />

        <div className="flex space-x-2 mt-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton className="w-20 h-4" />
          ))}
        </div>
        <div className="flex items-center mt-3 gap-2">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-20 h-4" />
        </div>
      </div>
    </div>
  );
};

export default ProjectItemSkeleton;
