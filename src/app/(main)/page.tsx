import { CalendarClock, Eye, Share2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto px-5 py-12">
      {/*************************
       *  Hero section
       **************************
       * */}
      <section className="">
        {/** TODO! Replace links and images with NextJS optimized versions */}
        <header className="p-4 hidden">
          <h1 className="font-bold text-3xl">
            Most up to date information on stuff
          </h1>
        </header>

        <a href="#">
          <article className="group relative w-full h-96 p-5 flex flex-col gap-4 justify-end items-start bg-black/0 hover:bg-black/75 transition-colors duration-300">
            {/** Category */}
            <p className="bg-black font-bold px-4 py-1 text-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
              Books
            </p>

            {/** Name */}
            <h2 className="bg-black font-bold text-3xl px-4 py-1 transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
              The blah blah blha very important British Bridge of Knobs
            </h2>

            {/** Profile Picture and article information */}
            <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-sm">
              {/** I decided not to put a figure around this profile picture image so the footer is more clear */}
              <figure className="flex items-center">
                <img
                  src="/dummy-pfp/man.png"
                  alt="Profile Picture"
                  className="h-12 w-12 rounded-full"
                />
                <figcaption className="sr-only">
                  Profile picture of Brian Hammer
                </figcaption>
              </figure>

              <p>
                By <strong className="font-bold">Brian Hammer</strong>{" "}
              </p>

              <time
                itemProp="date created"
                dateTime="2024-08-26"
                className="flex flex-row gap-1 items-center"
              >
                <CalendarClock className="w-5 h-5" /> Febuary 26, 2024
              </time>

              <p className="flex flex-row gap-1 items-center">
                <Eye className="w-5 h-5" /> 23 Views
              </p>
            </footer>

            <figure className="absolute top-0 bottom-0 left-0 right-0 -z-10">
              <img
                src="/dummy-article-images/image-one.jpg"
                alt="Hero Image"
                className="object-cover w-full h-96"
              />
            </figure>
          </article>
        </a>
      </section>
    </main>
  );
}
