import React from "react";
import Image from "next/image";
import { Article } from "@/lib/types";
import CustomAvatar from "../ui/custom/avatar";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import { extractTextFromHTML } from "@/lib/utils";

const ArticleItem: React.FC<Article> = ({
  topic,
  tags,
  cover_image_url,
  title,
  content,
  author,
  datePublished,
  minutesToRead,
}) => {
  console.log(
    "ArticleItem",
    "topic: ",
    topic,
    "tags",
    tags,
    cover_image_url,
    title,
    content,
    author,
    datePublished,
    minutesToRead
  );
  return (
    <div className="max-w-sm md:max-w-screen-lg text-left flex gap-2 border-b py-4 items-center">
      <Image
        src={cover_image_url}
        alt={extractTextFromHTML(title)}
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
          <span className="font-bold text-sm block">
            {extractTextFromHTML("topic")}
          </span>
          <Button
            variant="secondary"
            size={"icon"}
            className="text-xs"
            aria-label="star"
          >
            <Star />
          </Button>
        </div>
        <h4 className="font-bold mt-2">{extractTextFromHTML(title)}</h4>
        <p className="mt-2 text-sm">{extractTextFromHTML(content)}</p>

        <div className="flex mt-4 space-x-4">
          {/* <CustomAvatar user={author} /> */}
          <div>
            <span className="block w-full font-bold text-sm">
              {/* {author?.firstname + " " + author?.lastname} */}
              Test
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
