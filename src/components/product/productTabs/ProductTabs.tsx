import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import SpecificationTab from "./SpecificationTab/SpecificationTab";
import ReviewTab from "./reviewTab/ReviewTab";

function ProductTabs() {
  return (
    <>
      <Tabs defaultValue="reviews" className="w-full">
        <TabsList>
          <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
          <TabsTrigger value="specificaiton">Specifications</TabsTrigger>
        </TabsList>
        <TabsContent value="specificaiton">
          <SpecificationTab />
        </TabsContent>
        <TabsContent className="pt-5" value="reviews">
            <ReviewTab />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default ProductTabs;
