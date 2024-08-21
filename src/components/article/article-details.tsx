import { CalendarClock, Eye } from "lucide-react";
import React from "react";

type Props = {
  author: string;
  datePublished: Date;
  views?: number;
  authorUrl: string;
};

export const ArticleDetails = ({ author, datePublished, views }: Props) => {
  return (
    <ul className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-light-gray/50">
      <li>
        <p>
          By <strong className="font-bold">{author}</strong>{" "}
        </p>
      </li>

      {datePublished && (
        <li>
          <time
            itemProp="date created"
            dateTime={datePublished.toDateString()}
            className="flex flex-row gap-1 items-center"
          >
            <CalendarClock className="w-5 h-5" /> {datePublished.toDateString()}
          </time>
        </li>
      )}

      {views && (
        <li>
          <p className="flex flex-row gap-1 items-center">
            <Eye className="w-5 h-5" /> {views.toString()} Views
          </p>
        </li>
      )}
    </ul>
  );
};
