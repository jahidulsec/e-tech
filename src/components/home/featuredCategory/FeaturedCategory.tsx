import { featuredCategory } from "@/lib/data";
import React from "react";
import Card from "./Card";

function FeaturedCategory() {
  return (
    <section className="my-10">
      <div className="flex justify-center items-center gap-x-3 md:gap-5 flex-wrap">
        <h2 className="text-lg md:text-xl font-semibold">Shop by Category</h2>
        {/* <Button
          variant={"text"}
          className="p-0 text-xs md:text-sm text-secondary flex justify-end items-center gap-2"
        >
          <span>Browse all categories</span>
          <ArrowRight className="size-4" />
        </Button> */}
      </div>

      {/* cards */}
      <div className="cards flex justify-center items-center gap-5 flex-wrap mt-6">
        {featuredCategory.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedCategory;
