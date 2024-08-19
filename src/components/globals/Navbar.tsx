import { Menu } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <header className="py-4 sticky border-b border-b-gray">
      <div className="container mx-auto px-5 flex flex-row justify-between items-center">
        <a
          href="#"
          className="text-foreground hover:text-gray transition-colors duration-300"
        >
          <span className="font-bold text-xl">Blogging</span>
        </a>

        <a
          href="#"
          className="text-foreground hover:text-gray transition-colors duration-300"
        >
          <Menu className="w-8 h-8" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
