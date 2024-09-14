import React from "react";
import FilterSideBar from "./filterSection/FilterSideBar";
import SortingSection from "./filterSection/SortingSection";

export default function FilterSection() {
  return (
    <>
      <div className="sticky top-[4rem] bg-background z-[1] h-full border-y px-4 md:px-8 flex justify-between items-center gap-5">
        <FilterSideBar />
        <SortingSection />
      </div>
    </>
  );
}
