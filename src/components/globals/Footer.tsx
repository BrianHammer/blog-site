import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray">
      <div className="container mx-auto px-5 flex flex-col gap-8 items-center justify-center">
        <div className=" flex flex-col gap-2 justify-center items-center">
          <a href="#" className="text-xl font-bold">
            Blogging
          </a>
          <a className="text-sm ">Created by Brian Hammer</a>
        </div>

        <span>
          <ul className="flex flex-row gap-x-4 gap-y-0 flex-wrap justify-center items-center">
            <li className="">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Connect</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Associates</a>
            </li>

            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Work For Us!</a>
            </li>
            <li>
              <a href="#">Blah blah blah</a>
            </li>
            <li>
              <a href="#">Affiliate Links</a>
            </li>
          </ul>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
