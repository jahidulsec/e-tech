"use client";

import { Menu } from "lucide-react";
import HeaderSearch from "../../components/Search/HeaderSearch";
import { Button } from "../../components/ui/button";
import Logo from "@/components/logo/Logo";
import SearchSection from "@/components/navbar/SearchSection";
import { useState } from "react";
import RightSection from "@/components/navbar/RightSection";
import NavSection from "@/components/navbar/NavSection";

export default function Navbar() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-background z-10">
        <nav className="py-3 flex justify-between items-center md:grid md:grid-cols-3 border-b mx-5">
          {/* pc logo */}
          <div className="hidden md:block">
            <Logo />
          </div>

          {/* desktop */}
          <div className="left md:mx-auto">
            <div className="icons text-gray-400 flex items-center gap-1 md:gap-5 md:hidden">
              <Button size={"icon"} variant={"text"} className="text-gray-400">
                <Menu className="size-6" />
              </Button>
              <HeaderSearch
                onClick={() => {
                  setShowSearchBar(true);
                }}
              />
            </div>
            <NavSection />
          </div>

          {/* mobile logo */}
          <div className="md:hidden">
            <Logo />
          </div>

          {/* right side */}
          <RightSection setShowSearchBar={setShowSearchBar} />

          {/* desktop end */}
        </nav>

        <SearchSection
          show={showSearchBar}
          onClose={() => {
            setShowSearchBar(false);
          }}
        />
      </header>
    </>
  );
}
