"use client";

import HeaderSearch from "../../components/Search/HeaderSearch";
import Logo from "@/components/logo/Logo";
import SearchSection from "@/components/navbar/SearchSection";
import { useState } from "react";
import RightSection from "@/components/navbar/RightSection";
import NavSection from "@/components/navbar/NavSection";
import MobileMenuSection from "@/components/navbar/MobileMenuSection";
import ProductCategoryNav from "@/components/navbar/productCategoryNav/ProductCategoryNav";

export default function Navbar() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showProductCategoryBar, setShowProductCategoryBar] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-background z-10">
        <nav className="py-3 flex justify-between items-center md:grid md:grid-cols-3 border-b px-3 md:px-5">
          {/* pc logo */}
          <div className="hidden md:block">
            <Logo />
          </div>

          {/* nav middle*/}
          <div className="middle md:mx-auto">
            {/* mobile left */}
            <div className="icons text-gray-400 flex items-center gap-1 md:gap-5 md:hidden">
              <MobileMenuSection />
              <HeaderSearch
                onClick={() => {
                  setShowSearchBar(true);
                }}
              />
            </div>

            {/* desktop middle */}
            <NavSection
              showProductCategoryBar={showProductCategoryBar}
              setShowProductCategoryBar={setShowProductCategoryBar}
            />
          </div>

          {/* mobile logo */}
          <div className="md:hidden">
            <Logo />
          </div>

          {/* right side buttons */}
          <RightSection setShowSearchBar={setShowSearchBar} />

          {/* desktop end */}
        </nav>

        <SearchSection
          show={showSearchBar}
          onClose={() => {
            setShowSearchBar(false);
          }}
        />

        <ProductCategoryNav showProductCategoryBar={showProductCategoryBar} />
      </header>
    </>
  );
}
