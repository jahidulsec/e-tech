'use client'

import { Cart, UserAvatar } from "@/assets/icons";
import { Menu } from "lucide-react";
import HeaderSearch from "../../components/Search/HeaderSearch";
import ThemeButton from "../../components/buttons/ThemeButton";
import { Button } from "../../components/ui/button";
import NavLink from "@/components/navbar/navlink/NavLink";
import Logo from "@/components/logo/Logo";
import Link from "next/link";
import SearchSection from "@/components/navbar/SearchSection";
import { useState } from "react";

export default function Navbar() {

  const [showSearchBar, setShowSearchBar] = useState(true)

  return (
    <>
      <header className="sticky top-0 bg-background z-10">
        <nav className="py-3 flex justify-between items-center md:grid md:grid-cols-3 border-b mx-5">
          {/* logo */}
          <div className="hidden md:block">
            <Logo />
          </div>

          {/* desktop */}
          <div className="left md:mx-auto">
            <div className="icons text-gray-400 flex items-center gap-1 md:gap-5 md:hidden">
              <Button size={"icon"} variant={"text"} className="text-gray-400">
                <Menu className="size-6" />
              </Button>
              <HeaderSearch onClick={() => {setShowSearchBar(true)}} />
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

          <div className="md:hidden">
            <Logo />
          </div>

          {/* right side */}
          <div className="right flex items-center gap-3 md:gap-2 md:ml-auto">
            <ThemeButton />
            <HeaderSearch className="hidden md:block" onClick={() => {setShowSearchBar(true)}} />
            <Button
              size={"icon"}
              variant={"text"}
              className="text-gray-500 dark:text-gray-200 hidden md:block"
            >
              <UserAvatar className="size-6" />
            </Button>

            {/* cart */}
            <Button
              asChild
              size={"icon"}
              variant={"text"}
              className="relative flex gap-0.25 text-gray-500 dark:text-gray-200"
            >
              <Link href={"/cart"}>
                <Cart className="size-6" />
                <p className="text-[12px]">0</p>
              </Link>
            </Button>
          </div>

          {/* desktop end */}
        </nav>

        <SearchSection show={showSearchBar} onClose={() => {setShowSearchBar(false)}} />
      </header>
    </>
  );
}
