import React from "react";
import NavLink from "./navlink/NavLink";

function NavSection() {
  return (
    <ul className="relative items-center gap-2 hidden md:flex text-sm">
      <li className="relative">
        <NavLink>Products</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
      <li>
        <NavLink>Store</NavLink>
      </li>
    </ul>
  );
}

export default NavSection;
