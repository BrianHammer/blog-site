import { Menu } from "lucide-react";
import React from "react";

const AdminNavbar = () => {
  return (
    <header className="py-4 sticky border-b border-b-gray">
      <div className="container mx-auto px-5 flex flex-row justify-between items-center">
        <a
          href="/admin"
          className="text-foreground hover:text-gray transition-colors duration-300"
        >
          <span className="font-bold text-xl">Admin Dashboard</span>
        </a>

        <a
          href="#"
          className="text-foreground hover:text-gray transition-colors duration-300 md:hidden"
        >
          <Menu className="w-8 h-8" />
        </a>

        {/** Navlinks on large */}
        <ul className="hidden md:flex flex-row gap-4 ">
          <li className="">
            <a
              href="/admin/"
              className="hover:text-foreground/75 transition-colors duration-150"
            >
              Home
            </a>
          </li>
          <li className="">
            <a
              href="/admin/blogs"
              className="hover:text-foreground/75 transition-colors duration-150"
            >
              Posts
            </a>
          </li>
          <li className="">
            <a
              href="/admin"
              className="hover:text-foreground/75 transition-colors duration-150"
            >
              Prompts
            </a>
          </li>
          <li className="">
            <a
              href="/admin"
              className="hover:text-foreground/75 transition-colors duration-150"
            >
              Prompts
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AdminNavbar;