"use client";

import HeaderSearch from "../Search/HeaderSearch";
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
        {/* nav bar */}
        <div className="border-b">
          <nav
            className="py-3 md:px-8 2xl:container 2xl:mx-auto flex justify-between 
          items-center md:grid md:grid-cols-3 px-3"
          >
            {/* pc logo */}
            <div className="hidden md:block">
              <Logo />
            </div>

            {/* nav left*/}
            <div className="left md:mx-auto">
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
        </div>

        {/* search bar */}
        <SearchSection
          show={showSearchBar}
          onClose={() => {
            setShowSearchBar(false);
          }}
        />

        {/* product nav bar */}
        <ProductCategoryNav
          showProductCategoryBar={showProductCategoryBar}
          onClose={() => setShowProductCategoryBar(false)}
        />
    </>
  );
}
