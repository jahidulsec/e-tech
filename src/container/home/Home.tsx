import FeaturedCategory from "@/components/home/featuredCategory/FeaturedCategory";
import HeroCarousel from "@/components/home/heroSection/HeroCarousel";
import React from "react";

function Home() {
  return (
    <div className="px-4 md:px-8">
      <HeroCarousel />
      <FeaturedCategory />
    </div>
  );
}

export default Home;
