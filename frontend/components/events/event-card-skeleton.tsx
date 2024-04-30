import React from "react";

import { Skeleton } from "../ui/skeleton";

const EventCardSkeleton = () => {
  return (
    <div className="max-w-[450px]">
      <Skeleton className="mb-6 h-[250px] w-full" />
      <div className="pb-6">
        <div className="flex space-x-4 mb-4">
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="h-6 w-[200px]" />
        </div>
        <Skeleton className="h-6 w-[250px] mb-4" />
        <Skeleton className="h-6 w-[325px]" />
        <Skeleton className="h-6 w-[215px] mt-2" />
      </div>
    </div>
  );
};

export default EventCardSkeleton;
