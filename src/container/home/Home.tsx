import FeaturedCategory from "@/components/home/featuredCategory/FeaturedCategory";
import HeroCarousel from "@/components/home/heroSection/HeroCarousel";
import TrendingSection from "@/components/home/trendingSection/TrendingSection";
import React from "react";

function Home() {
  return (
    <div className="px-4 md:px-8 xl:container mx-auto">
      <HeroCarousel />
      <FeaturedCategory />
      <TrendingSection />
    </div>
  );
}

export default Home;
