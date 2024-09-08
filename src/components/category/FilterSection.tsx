import React from "react";
import { Button } from "../ui/button";
import { ChevronDown, Filter } from "lucide-react";
import { Separator } from "../ui/separator";

function FilterSection() {
  return (
    <>
      <div className="border-y px-4 md:px-8 flex justify-between items-center gap-5">
        <div className="left flex gap-1 items-center">
          <Button variant={"text"} className="text-muted-foreground text-xs">
            <Filter className="size-4 mr-2 " />
            <span>filter</span>
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
    </>
  );
}

export default FilterSection;
