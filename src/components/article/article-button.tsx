import React from "react";
import { ArticleHover } from "../globals/article-hover";
import { CalendarClock, Eye } from "lucide-react";

type ArticleButtonProps = {
  imageUrl: string;
  title: string;
  author: string;
  authorUrl: string;
  articleUrl: string;
  datePublished: Date;
  views: number;
};

export const ArticleButton = ({
  imageUrl,
  title,
  author,
  authorUrl,
  articleUrl,
  datePublished,
  views,
}: ArticleButtonProps) => (
  <a href={articleUrl}>
    <article className="group flex flex-row gap-4 w-full items-center">
      <ArticleHover
        src={imageUrl}
        articleTitle={title}
        className="text-secondary"
      />
      <div className="flex flex-col gap-2">
        <header className="">
          <h3 className="font-bold text-foreground text-xl transition-colors duration-300 group-hover:text-light-gray/50">
            {title}
          </h3>
        </header>

        {/** This was copied and slightly modified from the hero section... */}
        <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-gray">
          <p>
            By <strong className="font-bold">{author}</strong>{" "}
          </p>

          {/** TODO! Format date and views properly */}
          <time
            itemProp="date created"
            dateTime={datePublished.toString()}
            className="flex flex-row gap-1 items-center"
          >
            <CalendarClock className="w-5 h-5" /> {datePublished.toDateString()}
          </time>

          <p className="flex flex-row gap-1 items-center">
            <Eye className="w-5 h-5" /> {views} Views
          </p>
        </footer>
      </div>
    </article>
  </a>
);

///////////////////////////////////////////////////////////
// This is a button that contains a small preview of the article
///////////////////////////////////////////////////////////
type ArticleButtonWithTextPreviewProps = {
  category: String;
  title: string;
  displayText: string;
  imageUrl: string;
  articleUrl: string;
};
export const ArticleButtonWithTextPreview = ({
  category,
  title,
  displayText,
  imageUrl,
  articleUrl,
}: ArticleButtonWithTextPreviewProps) => (
  <a href={articleUrl}>
    <article className="group py-5">
      <figure className="float-right relative overflow-hidden rounded-full">
        <img
          src={imageUrl}
          className="w-24 h-24  object-cover"
          alt="article image"
        />
        <figcaption className="sr-only">
          Image for the article titled "{title}""
        </figcaption>

        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300">
          <span className="font-bold text-sm text-primary">Read More</span>
        </div>
      </figure>

      <header className="space-y-2">
        <p className="text-xs ">{category}</p>
        <h3 className="font-bold text-xl  transition-colors duration-300 group-hover:text-primary/100 capitalize">
          {title}
        </h3>
      </header>

      <p className="mt-2 text-light-gray/75 text-sm">{displayText}</p>
    </article>
  </a>
);
