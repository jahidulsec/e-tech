import FeaturedCategory from "@/components/home/featuredCategory/FeaturedCategory";
import HeroCarousel from "@/components/home/heroSection/HeroCarousel";
import ProductSection from "@/components/home/productSection/ProductSection";
import React from "react";

function Home() {
  return (
    <div className="px-4 md:px-8 xl:container mx-auto">
      <HeroCarousel />
      <FeaturedCategory />
      <ProductSection sectionTitle="Trending Products" />
      <ProductSection sectionTitle="Featured Products" />
    </div>
  );
}

export default Home;
