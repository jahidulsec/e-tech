import { Cart, UserAvatar, Search } from "@/assets/icons";
import { Menu, Orbit } from "lucide-react";
import React, { ReactNode } from "react";
import HeaderSearch from "../../components/Search/HeaderSearch";
import ThemeButton from "../../components/buttons/ThemeButton";
import { Button } from "../../components/ui/button";
import NavLink from "@/components/navbar/navlink/NavLink";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background">
      <nav className="py-3 flex justify-between items-center border-b mx-5">
        <div className="left">
          <div className="icons text-gray-400 flex items-center gap-5 md:hidden">
            <Button size={"icon"} variant={"text"} className="text-gray-400">
              <Menu className="size-6" />
            </Button>
            <HeaderSearch />
          </div>
          <ul className="items-center gap-2 hidden md:flex text-sm">
            <li>
              <NavLink>Products</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Store</NavLink>
            </li>
          </ul>
        </div>

        {/* logo */}
        <div className="logo text-primary">
          <Orbit className="size-6" />
        </div>

        {/* right side */}
        <div className="right text-gray-400 flex items-center gap-3 md:gap-2">
          <ThemeButton />
          <HeaderSearch className="hidden md:block" />
          <Button
            size={"icon"}
            variant={"text"}
            className="text-gray-400 hidden md:block"
          >
            <UserAvatar className="size-6" />
          </Button>

          {/* cart */}
          <Button
            size={"icon"}
            variant={"text"}
            className="relative flex gap-0.25 text-gray-400"
          >
            <Cart className="size-6" />
            <p className="text-[12px]">0</p>
          </Button>
        </div>
      </nav>
    </header>
  );
}
