import ImageSection from "@/components/product/imageSection/ImageSection";
import ProductDetails from "@/components/product/productDetails/ProductDetails";
import ProductTabs from "@/components/product/productTabs/ProductTabs";
import RelatedProductSection from "@/components/product/relatedProductSection/RelatedProductSection";
import { productData } from "@/lib/data";
import React from "react";

function ProductContainer() {
  const data = productData;

  return (
    <>
      <div className="px-4 md:px-8 xl:container mx-auto">
        {/* product section */}
        <section className="product grid grid-cols-1 md:grid-cols-2 gap-10 auto-rows-min">
          {/* left image section */}
          <ImageSection data={data} />
          {/* right description section */}
          <ProductDetails data={data} />

          {/* product tabs */}
          <ProductTabs />
        </section>
        {/* end product section */}

        {/* related product */}
        <RelatedProductSection />
      </div>
    </>
  );
}

export default ProductContainer;
