import { Menu } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <header className="p-4 sticky flex flex-row justify-between items-center border-b border-b-gray">
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
        <Menu className="w-5 h-5" />
      </a>
    </header>
  );
};

export default Navbar;
