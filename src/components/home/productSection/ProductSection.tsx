import SeeMoreButton from "@/components/buttons/SeeMoreButton";
import SectionHeading from "@/components/heading/SectionHeading";
import Card from "@/components/product/gridCard/Card";
import CardContainer from "@/components/product/gridCard/CardContainer";
import { trendingProducts } from "@/lib/data";
import React from "react";

type ProductSectionProps = {
  sectionTitle: string
}


function ProductSection({sectionTitle}: ProductSectionProps) {
  return (
    <section className="my-20">
      <div className="flex justify-between items-center gap-x-3 md:gap-5 flex-wrap">
        <SectionHeading>{sectionTitle}</SectionHeading>
        <SeeMoreButton title="See more" />
      </div>

      {/* product section */}
      <CardContainer>
        {trendingProducts.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </CardContainer>
    </section>
  );
}

export default ProductSection;
