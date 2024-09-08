import { featuredCategory } from "@/lib/data";
import React from "react";
import Card from "./Card";
import SectionHeading from "@/components/heading/SectionHeading";

function FeaturedCategory() {
  return (
    <section className="my-20">
      <div className="flex justify-center items-center gap-x-3 md:gap-5 flex-wrap">
        <SectionHeading>Shop by Category</SectionHeading>
      </div>

      {/* cards */}
      <div className="cards flex justify-center items-center gap-5 flex-wrap mt-6">
        {featuredCategory.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedCategory;
