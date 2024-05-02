import React from "react";
import { Project } from "@/lib/types";

const SideProjectCard: React.FC<Project> = ({ title, description, user }) => {
  return (
    <div className="text-left max-w-[450px] border-b pb-2">
      <h4 className="font-bold">{title}</h4>
      <p className=" text-sm">{description}</p>
      <div className="mt-1">
        <span className="block w-full font-semibold text-xs">
          {user.firstname + " " + user.lastname}
        </span>
      </div>
    </div>
  );
};

export default SideProjectCard;
