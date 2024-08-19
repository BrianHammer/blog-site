import { cn } from "@/lib/cn";
import React from "react";

type Props = {
  src: string;
  articleTitle: string;
  className?: string;
};

//NOTES!

// To be used in an article with an a tag
// "boilerplate" of this component
/**
<a href="...">
  <article className="group ..." >
    <!-- Image in here! -->
  </article>
</a>


 */

export const ArticleHover = ({ src, articleTitle, className }: Props) => {
  return (
    <figure
      className={cn(
        className,
        "w-24 h-24 inline-block relative rounded-full overflow-hidden flex-shrink-0 "
      )}
    >
      <img
        src={src}
        className="object-cover w-full h-full"
        alt="article image"
      />
      <figcaption className="sr-only">
        Image for the article titled {articleTitle}
      </figcaption>

      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300">
        <span className="font-semibold text-sm text-light-gray">Read More</span>
      </div>
    </figure>
  );
};
