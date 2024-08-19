import { ArticleHover } from "@/components/globals/article-hover";
import { CalendarClock, Eye, Share2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto">
      {/*********************************************************************************************************************
       *  HERO SECTION
       **********************************************************************************************************************
       * */}
      <section className="px-5 container mx-auto pb-16">
        {/** TODO! Replace links and images with NextJS optimized versions */}
        <header className="py-5">
          <h1 className="font-bold text-4xl capitalize hidden">
            Most up to date information on stuff
          </h1>
        </header>

        <a href="#">
          <article className="group relative w-full h-96 p-5 flex flex-col gap-4 justify-end items-start bg-black/0 hover:bg-black/75 transition-colors duration-300">
            {/** Category */}
            <p className="bg-black font-bold px-4 py-1 text-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
              Economics
            </p>

            {/** Name */}
            <h2 className="bg-black font-bold text-3xl px-4 py-1 transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
              The economic impacts of Big Chungus eating the world
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

        <section>
          <header className="flex flex-row justify-between items-center py-4">
            <h2 className="font-bold text-primary text-2xl">The Latest</h2>
            <time
              itemProp="date created"
              dateTime="2024-08-26"
              className="flex flex-row gap-1 items-center text-sm text-light-gray"
            >
              <CalendarClock className="w-5 h-5" /> Febuary 26, 2024
            </time>
          </header>

          <ul>
            <li className="border-t border-gray">
              <a href="#">
                <article className="group py-5">
                  <figure className="float-right relative overflow-hidden rounded-full">
                    <img
                      src="/dummy-pfp/beanie.png"
                      className="w-24 h-24  object-cover"
                      alt="article image"
                    />
                    <figcaption className="sr-only">
                      Image for the article titled "X"
                    </figcaption>

                    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                      <span className="font-bold text-sm text-primary">
                        Read More
                      </span>
                    </div>
                  </figure>

                  <header className="space-y-2">
                    <p className="text-xs ">COOKING</p>
                    <h3 className="font-bold text-xl  transition-colors duration-300 group-hover:text-primary/100 capitalize">
                      How to turn your kitchen into a meth lab
                    </h3>
                  </header>

                  <p className="mt-2 text-light-gray/75 text-sm">
                    Cooking meth can be very difficult but rewarding process at
                    the same time! Just make sure you dont get caught. Step One
                    is to...
                  </p>
                </article>
              </a>
            </li>

            <li className="border-t border-gray">
              <a href="#">
                <article className="group py-5">
                  <figure className="float-right relative overflow-hidden rounded-full">
                    <img
                      src="/dummy-pfp/doctor.png"
                      className="w-24 h-24  object-cover"
                      alt="article image"
                    />
                    <figcaption className="sr-only">
                      Image for the article titled "X"
                    </figcaption>

                    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                      <span className="font-semibold text-sm text-light-gray">
                        Read More
                      </span>
                    </div>
                  </figure>

                  <header className="space-y-2">
                    <p className="text-xs ">MOVIES</p>
                    <h3 className="font-bold text-xl  transition-colors duration-300 group-hover:text-foreground/50 capitalize">
                      What its like to be a big nerd with glasses
                    </h3>
                  </header>

                  <p className="mt-2 text-light-gray/75 text-sm">
                    I am such a Big Nerd, and my glasses are wonderful. I need
                    bigger glasses though because these ones get dirty too
                    easily...
                  </p>
                </article>
              </a>
            </li>

            <li className="border-t border-gray">
              <a href="#">
                <article className="group py-5">
                  <figure className="float-right relative overflow-hidden rounded-full">
                    <img
                      src="/dummy-pfp/rich.png"
                      className="w-24 h-24  object-cover"
                      alt="article image"
                    />
                    <figcaption className="sr-only">
                      Image for the article titled "X"
                    </figcaption>

                    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                      <span className="font-semibold text-sm text-light-gray">
                        Read More
                      </span>
                    </div>
                  </figure>

                  <header className="space-y-2">
                    <p className="text-xs ">MOVIES</p>
                    <h3 className="font-bold text-xl  transition-colors duration-300 group-hover:text-foreground/50 ">
                      My hat is 11 feet tall
                    </h3>
                  </header>

                  <p className="mt-2 text-light-gray/75 text-sm">
                    Sometimes I wobble around too much and fall because of the
                    weight. I use this hat to support my big brain...
                  </p>
                </article>
              </a>
            </li>

            <li className="border-t border-gray">
              <a href="#">
                <article className="group py-5">
                  <ArticleHover
                    src="/dummy-pfp/officer.png"
                    articleTitle=""
                    className="float-right"
                  />

                  <header className="space-y-2">
                    <p className="text-xs ">MOVIES</p>
                    <h3 className="font-bold text-xl  transition-colors duration-300 group-hover:text-foreground/50 ">
                      Blah blah blah
                    </h3>
                  </header>

                  <p className="mt-2 text-light-gray/75 text-sm">
                    Blah blah blah
                  </p>
                </article>
              </a>
            </li>
          </ul>
        </section>
      </section>

      {/************************************************************************************************************************
       * TRENDING SECTION
       * ***********************************************************************************************************************
       */}
      <div className="bg-black py-16">
        <section className="container mx-auto px-5">
          <header className="">
            <h2 className="font-bold text-3xl text-secondary mb-8">
              Trending Now
            </h2>
          </header>

          <ul className="flex flex-col gap-0">
            <li className="py-8 border-t border-gray">
              <a href="#">
                <article className="group flex flex-row gap-4 w-full items-center">
                  <ArticleHover
                    src="dummy-pfp/doctor.png"
                    articleTitle="X"
                    className="text-secondary"
                  />
                  <div className="flex flex-col gap-2">
                    <header className="">
                      <h3 className="font-bold text-foreground text-xl transition-colors duration-300 group-hover:text-light-gray/50">
                        20 Ya Books That Will Get You Pumped for Study Abroad
                      </h3>
                    </header>

                    {/** This was copied and slightly modified from the hero section... */}
                    <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-gray">
                      <p>
                        By <strong className="font-bold">Ligma</strong>{" "}
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
                  </div>
                </article>
              </a>
            </li>

            <li className="py-8 border-t border-gray">
              <a href="#">
                <article className="group flex flex-row gap-4 w-full items-center">
                  <ArticleHover
                    src="dummy-pfp/doctor.png"
                    articleTitle="X"
                    className="text-secondary"
                  />
                  <div className="flex flex-col gap-2">
                    <header className="">
                      <h3 className="font-bold text-foreground text-xl transition-colors duration-300 group-hover:text-light-gray/50">
                        20 Ya Books That Will Get You Pumped for Study Abroad
                      </h3>
                    </header>

                    {/** This was copied and slightly modified from the hero section... */}
                    <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-gray">
                      <p>
                        By <strong className="font-bold">Ligma</strong>{" "}
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
                  </div>
                </article>
              </a>
            </li>

            <li className="py-8 border-t border-gray">
              <a href="#">
                <article className="group flex flex-row gap-4 w-full items-center">
                  <ArticleHover
                    src="dummy-pfp/doctor.png"
                    articleTitle="X"
                    className="text-secondary"
                  />
                  <div className="flex flex-col gap-2">
                    <header className="">
                      <h3 className="font-bold text-foreground text-xl transition-colors duration-300 group-hover:text-light-gray/50">
                        20 Ya Books That Will Get You Pumped for Study Abroad
                      </h3>
                    </header>

                    {/** This was copied and slightly modified from the hero section... */}
                    <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-gray">
                      <p>
                        By <strong className="font-bold">Ligma</strong>{" "}
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
                  </div>
                </article>
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/************************************************************************************************************************
       * POPULAR SECTION
       * ***********************************************************************************************************************
       */}

      <section className="container mx-auto px-5 py-16 space-y-8">
        <header className="">
          <h2 className="text-3xl font-bold">Popular</h2>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <li>
            <a href="#">
              <article className="group flex flex-col gap-4">
                <figure className="relative">
                  <img
                    src="dummy-article-images/image-three.jpg"
                    className="w-full h-72 sm:h-52 object-cover"
                  />
                  <figcaption className="sr-only">
                    The article image of "INSERT_ARTICLE_NAME_HERE"
                  </figcaption>

                  <div className="absolute left-0 top-0 right-0 bottom-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                    <span className="font-bold">READ MORE</span>
                  </div>
                </figure>

                <div className="flex flex-row gap-4">
                  <div className="flex items-center justify-center w-12 h-12 border-r-2 border-gray flex-shrink-0">
                    <p className="font-bold text-4xl text-gray ">1</p>
                  </div>
                  <div>
                    <header className="">
                      <h3 className="text-2xl font-bold group-hover:opacity-50 transition-opacity duration-300">
                        The article of circuits
                      </h3>
                    </header>

                    <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-light-gray/50">
                      <p>
                        By <strong className="font-bold">Mr Angry</strong>{" "}
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
                  </div>
                </div>
              </article>
            </a>
          </li>

          <li>
            <a href="#">
              <article className="group flex flex-col gap-4">
                <figure className="relative">
                  <img
                    src="dummy-article-images/image-two.jpg"
                    className="w-full h-72 sm:h-52 object-cover"
                  />
                  <figcaption className="sr-only">
                    The article image of "INSERT_ARTICLE_NAME_HERE"
                  </figcaption>

                  <div className="absolute left-0 top-0 right-0 bottom-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                    <span className="font-bold">READ MORE</span>
                  </div>
                </figure>

                <div className="flex flex-row gap-4">
                  <div className="flex items-center justify-center w-12 h-12 border-r-2 border-gray flex-shrink-0">
                    <p className="font-bold text-4xl text-gray ">2</p>
                  </div>
                  <div>
                    <header className="">
                      <h3 className="text-2xl font-bold group-hover:opacity-50 transition-opacity duration-300">
                        Crazy contraptions for coffee mugs that will make you
                        jump
                      </h3>
                    </header>

                    <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-light-gray/50">
                      <p>
                        By <strong className="font-bold">Big Chungus</strong>{" "}
                      </p>

                      <time
                        itemProp="date created"
                        dateTime="2024-08-26"
                        className="flex flex-row gap-1 items-center"
                      >
                        <CalendarClock className="w-5 h-5" /> Febuary 26, 2024
                      </time>

                      <p className="flex flex-row gap-1 items-center">
                        <Eye className="w-5 h-5" /> 443 Views
                      </p>
                    </footer>
                  </div>
                </div>
              </article>
            </a>
          </li>

          <li>
            <a href="#">
              <article className="group flex flex-col gap-4">
                <figure className="relative">
                  <img
                    src="dummy-article-images/image-4.jpg"
                    className="w-full h-72 sm:h-52 object-cover"
                  />
                  <figcaption className="sr-only">
                    The article image of "INSERT_ARTICLE_NAME_HERE"
                  </figcaption>

                  <div className="absolute left-0 top-0 right-0 bottom-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                    <span className="font-bold">READ MORE</span>
                  </div>
                </figure>

                <div className="flex flex-row gap-4">
                  <div className="flex items-center justify-center w-12 h-12 border-r-2 border-gray">
                    <p className="font-bold text-4xl text-gray ">3</p>
                  </div>
                  <div>
                    <header className="">
                      <h3 className="text-2xl font-bold group-hover:opacity-50 transition-opacity duration-300">
                        The article of Angry Buildings
                      </h3>
                    </header>

                    <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-light-gray/50">
                      <p>
                        By <strong className="font-bold">Granny Smith</strong>{" "}
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
                  </div>
                </div>
              </article>
            </a>
          </li>

          <li>
            <a href="#">
              <article className="group flex flex-col gap-4">
                <figure className="relative">
                  <img
                    src="dummy-article-images/image-5.jpg"
                    className="w-full h-72 sm:h-52 object-cover"
                  />
                  <figcaption className="sr-only">
                    The article image of "INSERT_ARTICLE_NAME_HERE"
                  </figcaption>

                  <div className="absolute left-0 top-0 right-0 bottom-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                    <span className="font-bold">READ MORE</span>
                  </div>
                </figure>

                <div className="flex flex-row gap-4">
                  <div className="flex items-center justify-center w-12 h-12 border-r-2 border-gray">
                    <p className="font-bold text-4xl text-gray ">4</p>
                  </div>
                  <div>
                    <header className="">
                      <h3 className="text-2xl font-bold group-hover:opacity-50 transition-opacity duration-300">
                        The Big Round Dome
                      </h3>
                    </header>

                    <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-light-gray/50">
                      <p>
                        By <strong className="font-bold">Ligma</strong>{" "}
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
                  </div>
                </div>
              </article>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
