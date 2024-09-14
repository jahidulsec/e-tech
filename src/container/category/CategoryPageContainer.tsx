import FilterSection from "@/components/category/FilterSection";
import Header from "@/components/category/Header";
import ProductSection from "@/components/category/ProductSection";
import { Pagination } from "@/components/Pagination/Pagination";
import React from "react";

function CategoryPageContainer() {
  return (
    <div className="relative h-full">
      <Header />

      {/* filters */}
      <FilterSection />

      {/* products */}
      <ProductSection />

      <div className="pagination px-4 md:px-8 xl:container mx-auto">
        <Pagination limit={1} count={10} />
      </div>
    </div>
  );
}

export default CategoryPageContainer;
