import { CalendarClock, Eye } from "lucide-react";
import React from "react";
import { ArticleDetails } from "./article-details";

type Props = {
  ranking: number;
  title: string;
  author: string;
  datePublished: Date;
  views: number;
  backgroundImageUrl: string;
  profileImageUrl: string;
  authorUrl: string;
  articleUrl: string;
};

export const ArticleButtonPopular = ({
  ranking,
  title,
  author,
  datePublished,
  views,
  profileImageUrl,
  backgroundImageUrl,
  authorUrl,
  articleUrl,
}: Props) => {
  return (
    <a href={articleUrl}>
      <article className="group flex flex-col gap-4">
        <figure className="relative">
          <img
            src={backgroundImageUrl}
            className="w-full h-72 sm:h-52 object-cover"
          />
          <figcaption className="sr-only">
            The article image of "{title}"
          </figcaption>

          <div className="absolute left-0 top-0 right-0 bottom-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300">
            <span className="font-bold">READ MORE</span>
          </div>
        </figure>

        <div className="flex flex-row gap-4">
          <div className="flex items-center justify-center w-12 h-12 border-r-2 border-gray flex-shrink-0">
            <p className="font-bold text-4xl text-gray ">{ranking}</p>
          </div>
          <div>
            <header className="">
              <h4 className="text-2xl font-bold group-hover:opacity-50 transition-opacity duration-300">
                {title}
              </h4>
            </header>

            <footer className="">

              <ArticleDetails
                author={author}
                authorUrl={authorUrl}
                datePublished={datePublished}
                views={views}
              />
            </footer>
          </div>
        </div>
      </article>
    </a>
  );
};
