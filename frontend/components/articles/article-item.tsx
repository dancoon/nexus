import React from "react";
import Image from "next/image";
import { Article } from "@/lib/types";
import CustomAvatar from "../ui/custom/avatar";
import { Button } from "../ui/button";
import { Star } from "lucide-react";

const ArticleItem: React.FC<Article> = ({
  topic,
  tags,
  coverImageUrl,
  title,
  content,
  author,
  datePublished,
  minutesToRead,
}) => {
  return (
    <div className="max-w-sm md:max-w-screen-lg text-left flex gap-2 border-b py-4 items-center">
      <Image
        src={coverImageUrl}
        alt={title}
        width={100}
        height={100}
        className="rounded"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <div className="flex-1">
        <div className="flex items-center justify-between w-full">
          <span className="font-bold text-sm block">{topic}</span>
          <Button
            variant="secondary"
            size={"icon"}
            className="text-xs"
            aria-label="star"
          >
            <Star />
          </Button>
        </div>
        <h4 className="font-bold mt-2">{title}</h4>
        <p className="mt-2 text-sm">{content}</p>

        <div className="flex mt-4 space-x-4">
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
    </div>
  );
};

export default ArticleItem;
