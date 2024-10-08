import Logo from "@/components/logo/Logo";
import NavList from "@/components/footer/NavList";
import { footerItems } from "@/lib/data";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="px-4 md:px-8 w-full">
      <div className="xl:container py-10 mx-auto w-full border-t flex flex-col items-center gap-20">
        <Logo />

        <div className="nav grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20">
          {footerItems.map((item) => (
            <NavList key={item.id} {...item} />
          ))}
        </div>

        <p className="text-xs text-gray-500">© {new Date().getFullYear()} eTech, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
