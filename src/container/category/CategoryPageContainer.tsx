import Card from "@/components/product/gridCard/Card";
import CardContainer from "@/components/product/gridCard/CardContainer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { trendingProducts } from "@/lib/data";
import { ChevronDown, Filter } from "lucide-react";
import React from "react";

function CategoryPageContainer() {
  return (
    <div className="">
      <div className="header text-center my-8">
        <h2 className="font-bold text-4xl mb-5 text-secondary-foreground">
          Workspace
        </h2>
        <p className="text-sm text-muted-foreground mx-auto w-[30rem]">
          The secret to a tidy desk? Don't get rid of anything, just put it in
          really really nice looking containers.
        </p>
      </div>

      {/* filters */}
      <div className="border-y px-4 md:px-8 flex justify-between items-center gap-5">
        <div className="left flex gap-3 items-center">
          <Button variant={"text"} className="text-muted-foreground text-xs">
            <Filter className="size-4 mr-2 " />
            <span>2 filters</span>
          </Button>

          <Separator orientation="vertical" className="h-5" />

          <Button variant={"text"} className="text-muted-foreground  text-xs">
            Clear all
          </Button>
        </div>
        <div className="right">
          <Button
            variant={"text"}
            className="text-muted-foreground flex items-center text-xs"
          >
            <span>Sort</span>
            <ChevronDown className="size-3 ml-2" />
          </Button>
        </div>
      </div>

      {/* products */}
      <div className=" px-4 md:px-8 xl:container mx-auto mb-20">
        <CardContainer className="mt-0 border-t-0">
          {trendingProducts.map((item) => (
            <Card {...item} />
          ))}
        </CardContainer>
      </div>
    </div>
  );
}

export default CategoryPageContainer;
