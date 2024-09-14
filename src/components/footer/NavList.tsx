import { footerItems } from "@/lib/data";
import Link from "next/link";
import React from "react";

function NavList({id, links, title}: typeof footerItems[0]) {
  return (
    <ul key={id} className="flex flex-col gap-3  md:gap-6">
      <h4 className="text-sm md:text-md font-medium mb-2">{title}</h4>
      {links.map((link) => (
        <Link
          className="text-xs md:text-sm text-gray-500 hover:underline hover:text-primary dark:hover:text-primary"
          key={link}
          href={""}
        >
          <li>{link}</li>
        </Link>
      ))}
    </ul>
  );
}

export default NavList;
