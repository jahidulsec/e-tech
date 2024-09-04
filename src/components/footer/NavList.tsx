import { footerItems } from "@/lib/data";
import Link from "next/link";
import React from "react";

function NavList({id, links, title}: typeof footerItems[0]) {
  return (
    <ul key={id} className="flex flex-col gap-6">
      <h4 className="font-medium mb-2">{title}</h4>
      {links.map((link) => (
        <Link
          className="text-sm text-gray-500 hover:underline hover:text-gray-700"
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
