import React from "react";
import CardContainer from "../product/gridCard/CardContainer";
import { trendingProducts } from "@/lib/data";
import Card from "../product/gridCard/Card";

function ProductSection() {
  return (
    <>
      <div className="px-4 md:px-8 xl:container mx-auto mb-20">
        <CardContainer className="mt-0 border-t-0">
          {trendingProducts.map((item) => (
            <Card {...item} />
          ))}
        </CardContainer>
      </div>
    </>
  );
}

export default ProductSection;
