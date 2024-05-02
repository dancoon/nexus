import React from "react";
import { Project } from "@/lib/types";
import CustomAvatar from "../ui/custom/avatar";
import { Button } from "../ui/button";
import { Star } from "lucide-react";

const ProjectItem: React.FC<Project> = ({
  title,
  description,
  repoLink,
  user,
  topics,
}) => {
  return (
    <div className="max-w-sm md:max-w-screen-lg text-left flex gap-2 border-b py-4 items-center">
      <div className="flex-1">
        <div className="flex items-center justify-between w-full">
          <h4 className="font-bold mt-2">{title}</h4>
          <Button variant="secondary" size={"icon"} className="text-xs">
            <Star />
          </Button>
        </div>
        <p className="mt-2 text-sm">{description}</p>
        <ul className="flex space-x-2 mt-4">
          {topics.map((topic, index) => (
            <li key={index} className="">
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                {topic}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex mt-4 space-x-4 items-center">
          <CustomAvatar user={user} />
          <span className="block w-full font-bold text-sm">
            {user.firstname + " " + user.lastname}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
