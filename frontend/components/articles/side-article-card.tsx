import React from "react";
import { Article } from "@/lib/types";
import CustomAvatar from "../ui/custom/avatar";

const SideArticleCard: React.FC<Article> = ({
  tags,
  topic,
  title,
  description,
  owner,
  datePublished,
  minutesToRead,
}) => {
  return (
    <div className="text-left max-w-[450px] border-b pb-2">
      <h4 className="font-bold">{title}</h4>
      <p className=" text-sm">{description}</p>
      <div className="mt-1">
        <span className="block w-full font-semibold text-xs">
          {owner.firstname + " " + owner.lastname}
        </span>
      </div>
    </div>
  );
};

export default SideArticleCard;
