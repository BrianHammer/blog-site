import { Eye, Share2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto px-5 py-12">
      {/*************************
       *  Hero section
       **************************
       * */}
      <section>
        {/** TODO! Replace links and images with NextJS optimized versions */}

        <a href="#" className="group relative w-full h-96 overflow-hidden">
          {/** This works, but not sure how well it will hold */}
          <img
            src="/dummy-article-images/image-one.jpg"
            alt="Hero Image"
            className="object-cover w-full h-96"
          />

          {/** This is a strange effect by accident, where it immediately will transition immediately, but fade when hovered away 
           * CODE:
           <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-primary opacity-0 group-hover:opacity-50 group-hover:transition-colors duration-500 p-5">
              Hi
          </div>
          */}

          <div className="absolute top-0 bottom-0 left-0 right-0 p-5 w-full h-full flex flex-col gap-4 justify-end items-start bg-transparent transition-colors duration-300 group-hover:bg-black/50">
            <p className="bg-black font-bold px-4 py-1 text-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
              Books
            </p>
            <h1 className="bg-black font-bold text-3xl px-4 py-1 transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
              The blah blah blha very important British Bridge of Knobs
            </h1>

            {/** Profile Picture */}
            <div className="flex flex-row gap-x-4 flex-wrap items-center justify-center text-sm">
              <img
                src="/dummy-pfp/man.png"
                alt="Profile Picture"
                className="h-12 w-12 rounded-full"
              />
              <span> By Brian Hammer</span>
              <span className="flex flex-row gap-1 items-center">
                {" "}
                <Eye className="w-5 h-5" /> 265 views
              </span>
              <span className="flex flex-row gap-1 items-center">
                {" "}
                <Share2 className="w-5 h-5" /> 23 shares
              </span>
            </div>
          </div>
        </a>
      </section>
    </main>
  );
}
