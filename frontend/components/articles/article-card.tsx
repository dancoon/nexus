import Image from "next/image";
import React from "react";
import { Article } from "@/lib/types";
import CustomAvatar from "../ui/custom/avatar";

const ArticleCard: React.FC<Article> = ({
  tags,
  topic,
  coverImageUrl,
  title,
  content,
  author,
  datePublished,
  minutesToRead,
}) => {
  return (
    <div className="text-left max-w-[450px]">
      <Image
        src={coverImageUrl}
        alt={title}
        width={450}
        height={350}
        className="mb-6"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <span className="font-bold text-sm">{topic}</span>
      <h4 className="font-bold mt-2 text-lg">{title}</h4>
      <p className="mt-2">{content}</p>

      <div className="flex mt-6 space-x-4">
        <CustomAvatar user={author} />
        <div>
          <span className="block w-full font-bold text-sm">
            {author.firstname + " " + author.lastname}
          </span>
          <span className="block w-full text-sm">
            {datePublished + " . " + minutesToRead + " min read"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
